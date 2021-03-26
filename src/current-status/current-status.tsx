import React, { FunctionComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import useCurrentStatus from "./use-current-status";

const CurrentStatus: FunctionComponent<CurrentStatusProps> = ({
  placeId,
  relativeToNow,
}) => {
  // Obtain the status
  const status = useCurrentStatus(placeId, {
    relativeToNow,
  });

  if (status.loading || !status) {
    return <CircularProgress />;
  }

  if (status.error) {
    return <>Encountered an error: {status.error.message}</>;
  }

  return (
    <>
      <Typography variant="body1">{status.label}</Typography>
      <Typography variant="body2">
        {status.comment}
        {Array.isArray(status.publicHolidays) &&
          status.publicHolidays.length > 0 && (
            <>
              * Hours could be affected by public holidays (
              {status.publicHolidays.join(", ")})
            </>
          )}
      </Typography>
    </>
  );
};

type CurrentStatusProps = {
  placeId: string;
  relativeToNow: Date;
};

export default React.memo(CurrentStatus);
