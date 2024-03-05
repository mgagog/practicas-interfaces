import { FunctionComponent } from "preact";
import { Airport as AirportProps } from "../types.ts";
import { getFlagEmoji } from "../functions.ts"



const Airport: FunctionComponent<AirportProps> = (props) =>{
    const {iata, icao, name, region, city, country, elevation_ft, timezone, latitude, longitude} = props;
    return (
        <div class="card">
            <h2 class="cardTitle">{name}</h2>
            <p><strong>IATA: </strong>{iata}</p>
            <p><strong>ICAO: </strong>{icao}</p>
            <p><strong>City: </strong>{city}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Country: </strong>{country} {getFlagEmoji(country)}</p>
            <p><strong>Time Zone: </strong>{timezone}</p>
            <p><strong>Elevation (in feet): </strong>{elevation_ft}</p>
            <p><strong>Latitude: </strong>{latitude}</p>
            <p><strong>Longitude: </strong>{longitude}</p>
        </div>
    )
}

export default Airport;