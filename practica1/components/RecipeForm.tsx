import { FunctionComponent } from "preact";
import { Data as FormProps } from "../routes/recipe.tsx";
import Recipe from "./Recipe.tsx";

const RecipeForm: FunctionComponent<FormProps> = (props) => {
  const { recipes, query } = props;
  return (
    <div>
      <form method="get">
        <div>
          Enter the name of the recipe: &#127860;<br />
          <input type="text" name="query" value={query || ""} placeholder="Tacos, paella..."/>&nbsp;
          <button type="submit">Search</button>
        </div>
      </form>

      <div class="list">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.title}
            ingredients={recipe.ingredients}
            servings={recipe.servings}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeForm;
