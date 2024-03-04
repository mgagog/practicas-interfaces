import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import AirportForm from "../components/AirportForm.tsx";
import { Airport } from "../types.ts";
import Axios from "npm:axios";

export type Data = {
    airports: Airport[];
    search?: string;
}

export const handler: Handlers = {
    GET : async (req: Request, ctx: FreshContext<unknown, Data>) =>{  
        try {
            const API_KEY = Deno.env.get("API_KEY");
            const url = new URL(req.url);
            debugger;

            const search = url.searchParams.get("search") || undefined;

            if(search){
                const response = await Axios.get<Airport[]>(
                    `https://api.api-ninjas.com/v1/airports?name=${search}&X-Api-Key=${API_KEY}`,
                );
                return ctx.render({airports: response.data, search: search});
            }         

            return ctx.render({airports: [], search: search});
        } catch (error) {
            throw new Error("Ha habido un error");
        }     
    }
    
}

const Page = (props: PageProps<Data>) =>{
    try {
        const {airports, search} = props.data;
        return (
        <div>
            <AirportForm airports={airports} search=""/>
        </div>
    )
    } catch (error) {
        throw new Error("Ha habido un error");
    }
}

export default Page;