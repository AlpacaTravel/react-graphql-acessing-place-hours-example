import { useMemo } from "react";

import * as graphql from "../graphql";

const useOpeningHours = (placeId: string, options: Options = {}) => {
  const { relativeToNow = new Date() } = options;

  const { data, loading, error } = graphql.usePlaceOpeningHoursQuery({
    variables: { id: placeId, from: relativeToNow.toISOString() },
  });

  const forDays = useMemo(() => {
    if (data?.place?.hours?.forDays) {
      return data.place.hours.forDays;
    }
  }, [data]);

  return {
    forDays,
    loading,
    error,
  };
};

export default useOpeningHours;

type Options = {
  relativeToNow?: Date;
};
