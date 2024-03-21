import { FunctionComponent } from "preact";
import { Job } from "../types.ts";

type JobProps = Omit<Job, "slug" | "description" | "url" | "tags" | "job_types" | "created_at"> & {
    contacts: number;
    selected: boolean;
};

const JobComponent: FunctionComponent<JobProps> = (props) =>{
    const {title, company_name, location, remote, contacts, selected} = props;

    let jobClass="job_simple";

    if(selected)
        jobClass+=" selected";

    return (
        <div class={jobClass}>
            <img src={'/nebrija.png'} class="logo"/>
            <div class="simple_info">
                <strong class="title">
                {title}
                </strong>
                <div class="company">
                {company_name}
                </div>
                <div class="location">
                {location} {remote && <>(Remote)</>} 
                </div>
                <div class="contacts">
                    {contacts} contacts work here
                </div>
            </div>
            <div class="cross">&#10005;</div>
        </div>
    )
}

export default JobComponent;