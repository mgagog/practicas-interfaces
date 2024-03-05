import { FunctionComponent } from "preact";
import { Joke } from "../types.ts";

type JokesProps = {
    jokes: Joke[];
};

const Jokes: FunctionComponent<JokesProps> = (props) =>{
    return (
        <>
        {
            props.jokes.length > 0 &&
            <div class="card">
                <ul>
                {props.jokes.map((joke, index) => {
                    return <li key={index}><p>{joke.joke}</p></li>;
                })}
                </ul>
            </div>
        }
        </>
    )
}

export default Jokes;