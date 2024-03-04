import { FunctionComponent } from "preact";
import { Data as FormProps } from "../routes/jokes.tsx";
import Jokes from "./Jokes.tsx";

const AirportForm: FunctionComponent<FormProps> = (props) => {
  const { jokes, limit } = props;
  return (
    <div>
      <form method="get">
        <div>
          Enter the number of jokes you want: &#127908;<br />
          <input
            type="number"
            min={1}
            max={10}
            name="limit"
            value={limit || ""}
          />&nbsp;
          <button type="submit">Shuffle</button>
        </div>
      </form>
      <div class="list jokes">
        <Jokes jokes={jokes} />
      </div>
    </div>
  );
};

export default AirportForm;
