import { FunctionComponent } from "preact";
import { Job as JobProps } from "../types.ts";

const DetailedJobComponent: FunctionComponent<JobProps> = (props) => {
  const {
    title,
    company_name,
    location,
    created_at,
    remote,
    tags,
    job_types,
    url,
    description,
  } = props;
  const date = new Date(created_at * 1000);

  function createDescription() {
    return { __html: `<div>${description}</div>` };
  }

  return (
    <div class="job_detailed">
      <div class="detailed_info">
        <strong class="title">
          {title}
        </strong>
        <div class="info_extra">
          <strong class="company">{company_name}&nbsp;</strong> ·
          <div class="location">&nbsp;{location}&nbsp;</div> ·
          <div class="created_at">
            &nbsp;Created at {date.toLocaleDateString()}
          </div>
        </div>
        <br />
        <br />
        <div class="info_extra">
          <img src={'/briefcase.png'} class="icon"/> &ensp; Availability: {remote ? <>Remote</> : <>Hybrid</>}
        </div>
        <br />
        {tags.length > 0 &&
          (
            <div class="info_extra">
              <img src={'/tag.png'} class="icon"/>&ensp; Tags: {tags.join(", ")}
            </div>
          )}
        <br />
        {job_types.length > 0 &&
          (
            <div class="info_extra">
              <img src={'/lightbulb.png'} class="icon"/>&ensp; Job types: {job_types.join(", ")}
            </div>
          )}
        <br />
        <div class="buttons">
          <form action={url}>
            <button class="apply" type="submit">Apply &#8618;</button>
          </form>
          &nbsp;
          <button>Save</button>
        </div>
        <br />
        <br />
        <h2 class="description_title">About the job</h2>
        <div
          class="description"
          dangerouslySetInnerHTML={createDescription()}
        />
      </div>
    </div>
  );
};

export default DetailedJobComponent;
