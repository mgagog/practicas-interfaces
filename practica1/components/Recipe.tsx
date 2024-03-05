import { FunctionComponent } from "preact";
import { Recipe as RecipeProps } from "../types.ts";



const Recipe: FunctionComponent<RecipeProps> = (props) =>{
    const {title, ingredients, servings, instructions} = props;
    const separatedIngredients = ingredients.split("|");
    const separatedInstructions = instructions.split(".");
    return (
        <div class="card">
            <h2 class="centeredTitle">{title}</h2>
            <p><strong>Servings: </strong>{servings}</p>
            <p><strong>Ingredients: </strong></p>
            <ul>
                {separatedIngredients.map((ing, index) => {
                    return <li key={index}><p>{ing}</p></li>;
                })}
            </ul>
            <p><strong>Instructions: </strong></p>
            <ul>
            {separatedInstructions.map((ins, index) => {
                    if (ins) return <li key={index}><p>{ins}</p></li>;
                })}
            </ul>
            
        </div>
    )
}

export default Recipe;