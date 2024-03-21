import { FunctionComponent } from "preact";
import { JobList as JobListProps } from "../types.ts";
import JobComponent from "../components/Job.tsx";
import DetailedJobComponent from "../components/DetailedJob.tsx";
import { useState } from "preact/hooks";

const JobList: FunctionComponent<JobListProps> = (props) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div class="container">
      <div class="header_and_list">
        <div class="header">
          <div class="header_text">
            <h2>Principales empleos que te recomendamos</h2>
            <h4>{props.data.length} resultados</h4>
          </div>
        </div>
        <div class="job_list">
          {props.data.map((job, index) => {

            return (
              <div>
                <div onClick={(e) => setSelected(index)}>
                  <JobComponent
                    key={job.slug}
                    title={job.title}
                    company_name={job.company_name}
                    location={job.location}
                    remote={job.remote}
                    contacts={Math.floor(Math.random() * 11)}
                    selected={index === selected}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DetailedJobComponent
        title={props.data[selected].title}
        company_name={props.data[selected].company_name}
        location={props.data[selected].location}
        remote={props.data[selected].remote}
        slug={props.data[selected].slug}
        description={props.data[selected].description}
        url={props.data[selected].url}
        tags={props.data[selected].tags}
        job_types={props.data[selected].job_types}
        created_at={props.data[selected].created_at}
      />
    </div>
  );
};

export default JobList;
