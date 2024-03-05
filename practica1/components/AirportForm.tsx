import { FunctionComponent } from "preact";
import { Data as FormProps } from "../routes/airport.tsx";
import Airport from "./Airport.tsx";

const AirportForm: FunctionComponent<FormProps> = (props) => {
  const { airports, search } = props;
  return (
    <div>
      <form method="get">
        <div>
          Enter the name of the airport: &#9992;&#65039;<br/>
          <input
            type="text"
            name="search"
            value={search || ""}
            class="airportInput"
            placeholder="Barajas, Newark..."
          />&nbsp;
          <button type="submit">Search</button>
        </div>
      </form>
      <div class="list airport">
        {airports.length > 0 &&
          (
            <Airport
              iata={airports[0].iata}
              icao={airports[0].icao}
              name={airports[0].name}
              region={airports[0].region}
              city={airports[0].city}
              country={airports[0].country}
              elevation_ft={airports[0].elevation_ft}
              timezone={airports[0].timezone}
              latitude={airports[0].latitude}
              longitude={airports[0].longitude}
            />
          )}
      </div>
    </div>
  );
};

export default AirportForm;
