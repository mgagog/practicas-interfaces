import { FunctionComponent } from "preact";
import { Recipe as RecipeProps } from "../types.ts";



const Recipe: FunctionComponent<RecipeProps> = (props) =>{
    const {title, ingredients, servings, instructions} = props;
    const separatedIngredients = ingredients.split("|");
    const separatedInstructions = instructions.split(".");
    return (
        <div class="card recipe">
            <h2 class="cardTitle">{title}</h2>
            <p><strong>Servings: </strong>{servings}</p>
            <p><strong>Ingredients: </strong></p>
            <ul>
                {separatedIngredients.map(ing => {
                    return <li key={separatedIngredients.indexOf(ing)}><p>{ing}</p></li>;
                })}
            </ul>
            <p><strong>Instructions: </strong></p>
            <ul>
            {separatedInstructions.map(ins => {
                    if (ins) return <li key={separatedInstructions.indexOf(ins)}><p>{ins}</p></li>;
                })}
            </ul>
            
        </div>
    )
}

export default Recipe;