import React, { FunctionComponent, useCallback } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useOpeningHours from "./use-opening-hours";

const OpeningHours: FunctionComponent<OpeningHoursProps> = ({
  placeId,
  relativeToNow,
}) => {
  // Obtain the forDays result
  const { forDays, loading, error } = useOpeningHours(placeId, {
    relativeToNow,
  });

  // If loading, wait
  if (loading || !forDays) {
    return <CircularProgress />;
  }

  // If errors, display
  if (error) {
    return <>Encountered an error: {error.message}</>;
  }

  return (
    <Grid container md={10}>
      {forDays.map((day) => (
        <Grid container>
          <Grid md={3}>
            <Typography variant="body1">
              {day.date}{" "}
              {day.publicHolidays.length > 0 && (
                <>({day.publicHolidays.join(", ")})</>
              )}
            </Typography>
          </Grid>
          <Grid md={9}>
            <Typography variant="body1">
              {day.intervals.map((interval) => (
                <>
                  <Times from={interval.from} to={interval.to} />{" "}
                  {interval.comment}
                </>
              ))}
              {day.publicHolidays.length > 0 && <>*</>}
            </Typography>
          </Grid>
        </Grid>
      ))}
      {forDays.some((day) => day.publicHolidays.length > 0) && (
        <Grid container>
          <Typography variant="body2">
            * Public holidays may affect regular opening hours
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

type OpeningHoursProps = {
  placeId: string;
  relativeToNow: Date;
};

export default React.memo(OpeningHours);

const Times: FunctionComponent<TimeProps> = ({ from, to }) => {
  const display = useCallback((value: string | null | undefined) => {
    if (value === "12:00 AM") {
      return <>Midnight</>;
    }
    if (value === "12:00 PM") {
      return <>Mid-day</>;
    }
    if (value === "undefined") {
      return <>Next day</>;
    }

    return <>{value || null}</>;
  }, []);

  if (from === "12:00 AM" && to === "12:00 PM") {
    return <>All day</>;
  }

  return (
    <>
      {display(from)} - {display(to)}
    </>
  );
};

type TimeProps = {
  from: string | undefined | null;
  to: string | undefined | null;
};
