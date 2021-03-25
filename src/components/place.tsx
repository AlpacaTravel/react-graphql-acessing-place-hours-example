import React, {
  FunctionComponent,
  useMemo,
  useState,
  useCallback,
} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import * as graphql from "../graphql/types";

const SOON = 30 * 60 * 1000; /* ms */

const Place: FunctionComponent<PlaceProps> = () => {
  // Configure the date
  const [dateTime, setDateTime] = useState<string>("now");
  const relativeToNow = useMemo(() => {
    if (dateTime === "now") {
      return new Date();
    }
    return new Date(dateTime);
  }, [dateTime]);

  const { data, loading, error } = graphql.usePlaceOpeningHoursQuery({
    variables: {
      id: "place/facebook:page:mavisthegrocer",
      from: relativeToNow.toISOString(),
    },
  });

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

    // Create the label representations
    //
    // Examples of values:
    // NOW - 3:30 PM OPEN (Closes in 5 minutes)
    // NOW - 3:30 PM OPEN
    // CLOSED - Opens in 10 minutes (7:00 AM to 3:30 PM)
    // CLOSED - Opens Mon 25, Jul 7:00 AM to 3:30 PM
    const label = (() => {
      // Identify if the next status is soon
      const nextStatusIsSoon =
        relativeToNow.getTime() + SOON > new Date(soon.from).getTime();

      // Create the labels
      if (now.status === "Open") {
        if (nextStatusIsSoon) {
          return `NOW - ${now.toTime} OPEN (Closes ${soon.relative})`;
        }
        return `NOW - ${now.toTime} OPEN`;
      }
      if (now.status === "Closed") {
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
          return `CLOSED - Opens ${soon.relative} (${nextTime})`;
        }
        return `CLOSED - Opens ${nextTime}`;
      }
    })();

    // Any other comments / holiday warnings
    const [comment, publicHolidays] = (() => {
      if (now.status === "Open") {
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
  }, [data?.place, relativeToNow]);

  const onChangeDateTimeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setDateTime(e.target.value);
    },
    []
  );

  if (loading || !status) {
    return <CircularProgress />;
  }

  if (error) {
    return <>Encountered an error: {error.message}</>;
  }

  return (
    <div>
      <h2>Relative to</h2>
      <select value={dateTime} onChange={onChangeDateTimeHandler}>
        <option value="now">Now</option>
        <option value="2021-03-25T06:55:00+11:00">Just before open</option>
        <option value="2021-03-25T07:30:00+11:00">Open</option>
        <option value="2021-03-25T15:20:00+11:00">Just before close</option>
        <option value="2021-03-25T17:30:00+11:00">Closed</option>
        <option value="2021-04-02T07:30:00+11:00">Good Friday</option>
      </select>

      <h2>Status</h2>
      <p>{status.label}</p>
      <p>
        {status.comment}
        {Array.isArray(status.publicHolidays) &&
          status.publicHolidays.length > 0 && (
            <>
              * Hours could be affected by public holidays (
              {status.publicHolidays.join(", ")})
            </>
          )}
      </p>
    </div>
  );
};

type PlaceProps = {};

export default React.memo(Place);

const compareableDate = (d: Date) =>
  JSON.stringify({
    date: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear(),
  });
