import { Handlers, FreshContext, PageProps } from "$fresh/server.ts";
import JobComponent from "../components/Job.tsx";
import JobList from "../islands/JobList.tsx";
import { JobList as Data } from "../types.ts";
import Axios from "npm:axios";

export const handler: Handlers<Data> = {
  GET : async (_req: Request, ctx: FreshContext<unknown, Data>) =>{  
      try {
          const response = await Axios.get<Data>('https://www.arbeitnow.com/api/job-board-api');

          //console.log(response.data.data);

          if(response.status !== 200)
              return ctx.render({data: []});

          debugger;

          return ctx.render({data: response.data.data});   
      } catch (error) {
          throw new Error("Ha habido un error");
      }     
  }
  
}
export default function Home(props: PageProps<Data>) {
  return (
    <div>
      <JobList data={props.data.data} />
    </div>
  );
}
