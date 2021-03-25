# Example for Accessing GraphQL Opening Hours

The example react application calls upon the GraphQL service for information
about opening hours for a venue.

The project uses React, Typescript, Apollo and generated hooks to access the
information using the following GraphQL query:

```graphql
# Load the place hours in order to display detailed information about the hours
# to the user.

query PlaceOpeningHours($id: ID!, $from: String) {
  place(id: $id) {
    id
    __typename
    hours {
      # Access the next window that the place is open. Supports selecting a
      # series of Open/Closed hours and can be used to let users know when
      # a venue will be open/closed next.
      intervals(first: 2, from: $from) {
        # First node is the current state, second node is the upcoming change
        # of status.
        nodes {
          # Times from/to as ISO-8601 string, or formatted using the Unicode
          # Technical Standard #35 Date Field Symbols
          from
          to
          # Date Formatting for displaying dates and relative times
          fromToday: from(format: "h:mm a")
          fromNextDay: from(format: "EEE, MMM d, h:mm a")
          toTime: to(format: "h:mm a")
          relative: from(relativeTo: $from)
          # Status Open/Closed
          status
          # Any comments attached to the opening hours
          comment
          publicHolidays {
            name
          }
        }
      }
    }
  }
}
```

Using the returned result, values can be output to display labels such as:

- NOW - 3:30 PM OPEN (Closes in 5 minutes)
- NOW - 3:30 PM OPEN
- CLOSED - Opens in 10 minutes (7:00 AM to 3:30 PM)
- CLOSED - Opens Mon 25, Jul 7:00 AM to 3:30 PM

The GraphQL also returns comments about the hours, as well as public holidays
so that you can provide information such as "By appointment only" or indicate
to the user that they could be affected by public holidays.

## Getting Started

### Installation

```
git clone https://github.com/AlpacaTravel/react-graphql-acessing-place-hours-example
cd react-graphql-acessing-place-hours-example
yarn install
```

### Create your environment variable

Create a `.env.local` in the root of the project with your API Key

```
REACT_APP_GRAPHQL_ACCESS_TOKEN=pk...
```

### Start the Application

```
yarn start
```
