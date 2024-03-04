import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import JokesForm from "../components/JokesForm.tsx";
import { Joke } from "../types.ts";
import Axios from "npm:axios";

export type Data = {
    jokes: Joke[];
    limit?: string;
}

export const handler: Handlers = {
    GET : async (req: Request, ctx: FreshContext<unknown, Data>) =>{  
        try {
            const API_KEY = Deno.env.get("API_KEY");
            const url = new URL(req.url);
            debugger;

            const limit = url.searchParams.get("limit") || undefined;

            if(limit && parseInt(limit)){
                const response = await Axios.get<Joke[]>(
                    `https://api.api-ninjas.com/v1/jokes?limit=${limit}&X-Api-Key=${API_KEY}`,
                );
                return ctx.render({jokes: response.data, limit: limit});
            }         

            return ctx.render({jokes: [], limit: limit});
        } catch (error) {
            throw new Error("Ha habido un error");
        }     
    }
    
}

const Page = (props: PageProps<Data>) =>{
    try {
        const {jokes, limit} = props.data;
        return (
        <div>
            <JokesForm jokes={jokes} limit={limit}/>
        </div>
    )
    } catch (error) {
        throw new Error("Ha habido un error");
    }
}

export default Page;