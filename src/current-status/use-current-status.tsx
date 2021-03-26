import { useMemo } from "react";

import * as graphql from "../graphql";

/**
 * Crude creation of the label representations Examples of values:
 *
 * - NOW - 3:30 PM OPEN (Closed in 5 minutes)
 * - NOW - 3:30 PM OPEN
 * - CLOSED - Open in 10 minutes (7:00 AM to 3:30 PM)
 * - CLOSED - Open Mon 25, Jul 7:00 AM to 3:30 PM
 *
 * TODO: Create a JSX Element response that can allow for CSS styling
 *
 * @param placeId String place ID to load
 * @param options Options to customise behaviour
 * @returns
 */
const usePlaceHoursCurrentStatus = (placeId: string, options: Options = {}) => {
  // Defaults
  const {
    soonMs = 30 * 60 * 1000,
    relativeToNow = new Date(),
    translate = t,
  } = options;

  // Load the place opening hours content
  const { data, loading, error } = graphql.usePlaceOpeningHoursQuery({
    variables: {
      id: placeId,
      from: relativeToNow.toISOString(),
    },
  });

  // Build a status representation
  const status = useMemo(() => {
    // Get the hours from the place
    const intervals =
      data?.place &&
      data?.place.__typename === "Place" &&
      data.place.hours?.intervals?.nodes;
    if (!intervals || intervals == null) {
      return null;
    }
    const [now, soon] = intervals;

    // Create a label
    const label = (() => {
      // Identify if the next status is soon
      const nextStatusIsSoon =
        relativeToNow.getTime() + soonMs > new Date(soon.from).getTime();

      // Create the labels
      if (now.status === graphql.PlaceHoursStatus.Open) {
        if (nextStatusIsSoon) {
          // "NOW - 3:30 PM OPEN (Closed in 5 minutes)"
          return `${translate("Now").toLocaleUpperCase()} - ${
            now.toTime
          } ${translate(
            graphql.PlaceHoursStatus.Open
          ).toLocaleUpperCase()} (${translate(
            graphql.PlaceHoursStatus.Closed
          )} ${soon.relative})`;
        }
        // "NOW - 3:30 PM OPEN"
        return `${translate("Now").toLocaleUpperCase()} - ${
          now.toTime
        } ${translate(graphql.PlaceHoursStatus.Open).toLocaleUpperCase()}`;
      }
      if (now.status === graphql.PlaceHoursStatus.Closed) {
        // Prefix the next time start with the from day if dates are different
        // e.g. either 10:00 AM or Mon 31 - 10:00 AM
        const nextTime = (() => {
          // Determine if our next status is on a different day
          if (
            compareableDate(relativeToNow) !==
            compareableDate(new Date(soon.from))
          ) {
            return `${soon.fromNextDay} - ${soon.toTime}`;
          }
          return `${soon.fromToday} - ${soon.toTime}`;
        })();

        if (nextStatusIsSoon) {
          // "CLOSED - Open in 10 minutes (7:00 AM to 3:30 PM)"
          return `${translate(
            graphql.PlaceHoursStatus.Closed
          ).toLocaleUpperCase()} - ${graphql.PlaceHoursStatus.Open} ${
            soon.relative
          } (${nextTime})`;
        }
        // "CLOSED - Open Mon 25, Jul 7:00 AM to 3:30 PM"
        return `${translate(
          graphql.PlaceHoursStatus.Closed
        ).toLocaleUpperCase()} - ${graphql.PlaceHoursStatus.Open} ${nextTime}`;
      }
    })();

    // Any other comments / holiday warnings
    const [comment, publicHolidays] = (() => {
      if (now.status === graphql.PlaceHoursStatus.Open) {
        return [now.comment, now.publicHolidays.map((n) => n.name)];
      }
      return [soon.comment, soon.publicHolidays.map((n) => n.name)];
    })();

    // Build a easy reference
    return {
      label,
      comment,
      publicHolidays,
    };
  }, [data?.place, relativeToNow, translate, soonMs]);

  return {
    loading,
    error,
    ...status,
  };
};

export default usePlaceHoursCurrentStatus;

type Options = {
  soonMs?: number;
  translate?: (text: string) => string;
  relativeToNow?: Date;
};

/**
 * Returns a string to compare dates at YYYY-MM-DD level
 * @param d Date
 * @returns String of date representation
 */
const compareableDate = (d: Date) =>
  JSON.stringify({
    date: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
  });

/**
 * Provides a way of substituting text based
 */
const t = (text: string): string => {
  return text;
};
