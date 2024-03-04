import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import RecipeForm from "../components/RecipeForm.tsx";
import { Recipe } from "../types.ts";
import Axios from "npm:axios";

export type Data = {
    recipes: Recipe[];
    query?: string;
}

export const handler: Handlers = {
    GET : async (req: Request, ctx: FreshContext<unknown, Data>) =>{  
        try {
            const API_KEY = Deno.env.get("API_KEY");
            const url = new URL(req.url);
            debugger;

            const query = url.searchParams.get("query") || undefined;

            if(query){
                const response = await Axios.get<Recipe[]>(
                    `https://api.api-ninjas.com/v1/recipe?query=${query}&X-Api-Key=${API_KEY}`,
                );
                return ctx.render({recipes: response.data, query: query});
            }         

            return ctx.render({recipes: [], query: query});
        } catch (error) {
            throw new Error("Ha habido un error");
        }     
    }
    
}

const Page = (props: PageProps<Data>) =>{
    try {
        const {recipes, query} = props.data;
        return (
        <div>
            <RecipeForm recipes={recipes} query={query}/>
        </div>
    )
    } catch (error) {
        throw new Error("Ha habido un error");
    }
}

export default Page;