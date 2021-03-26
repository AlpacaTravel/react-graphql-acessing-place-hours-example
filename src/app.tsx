import React, { useMemo, useState, useCallback } from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

import client from "./client";
import CurrentStatus from "./current-status/current-status";
import OpeningHours from "./opening-hours/opening-hours";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  // The place ID (hardcode)
  const placeId = "place/facebook:page:mavisthegrocer";

  // Configure the date (this example allows you to change the date)
  const [dateTime, setDateTime] = useState<string>("now");
  const relativeToNow = useMemo(() => {
    if (dateTime === "now") {
      return new Date();
    }
    return new Date(dateTime);
  }, [dateTime]);

  // Change the date
  const onChangeDateTimeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setDateTime(e.target.value);
    },
    []
  );

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Opening Hours</Typography>
        <Typography variant="body1">
          Using the date as {relativeToNow.toLocaleString()}
        </Typography>
        <select value={dateTime} onChange={onChangeDateTimeHandler}>
          <option value="now">Now</option>
          <option value="2021-03-25T06:55:00+11:00">Just before open</option>
          <option value="2021-03-25T07:30:00+11:00">Open</option>
          <option value="2021-03-25T15:20:00+11:00">Just before close</option>
          <option value="2021-03-25T17:30:00+11:00">Closed</option>
          <option value="2021-04-02T07:30:00+11:00">Good Friday</option>
        </select>

        <Typography variant="h6">Status using `interval()`</Typography>
        <CurrentStatus placeId={placeId} relativeToNow={relativeToNow} />
        <Typography variant="h6">Upcoming days using `forDays()`</Typography>
        <OpeningHours placeId={placeId} relativeToNow={relativeToNow} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
