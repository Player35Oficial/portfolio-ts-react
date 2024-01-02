// import { IconType } from "react-icons";
import Default from "../../assets/default_project_image.png";

interface ProjectCardProps {
  image: string;
  created_at: string;
  finished_at: string;
  techs: string;
  project_name: string;
  short_project_description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    image,
    created_at,
    finished_at,
    techs,
    project_name,
    short_project_description,
  } = props;

  return (
    <div className="flex max-[440px]:p-4 p-6 flex-col bg-surface-primary max-[440px]:w-full h-fit w-[24rem] rounded-2xl hover:shadow-[0_0_45px_0_rgba(125,255,175,0.24)] border-[1px] border-surface-primary hover:border-[1px] hover:border-secondary hover:cursor-pointer transition ">
      <div className="bg-primary-400 rounded-t-lg h-40">
        <img
          className="rounded-t-lg h-40 "
          src={image || Default}
          alt="alt text"
        />
      </div>
      <div className="my-4 flex justify-between">
        <p>
          {created_at && finished_at
            ? `${created_at} - ${finished_at} 2023`
            : "in development"}
        </p>
        <div className="stacks text-techs-colors">
          {techs ? techs : "(resolver)"}
        </div>
      </div>
      <div className=" w-[100] gap-2 flex flex-col">
        <strong className="text-xl">{project_name || "Project Name"}</strong>
        <p className="text-text-secondary h-fit max-h-[4.5rem] truncate">
          {short_project_description || "Short project description"}
        </p>
      </div>
    </div>
  );
}
