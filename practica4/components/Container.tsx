import { FunctionComponent } from "preact";
import Pokemon from "../islands/Pokemon.tsx"
import Users from "../islands/Users.tsx"
import Quotes from "../islands/Quotes.tsx"

const Container: FunctionComponent = () => {
  return (
    <div class="big_container">
        <Pokemon />
        <div class="small_container">
            <Users />
            <Quotes />         
        </div>
    </div>
  );
};

export default Container;