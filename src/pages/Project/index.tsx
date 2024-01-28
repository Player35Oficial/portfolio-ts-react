import { ProjectCardFull } from "../../components/ProjectCard";
import { PiGlobe } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";
import { useParams } from "react-router-dom";
import { project1, project2, project3 } from "../../data/Projects";

export default function Project() {
  const params = useParams();
  const projects = [project1, project2, project3];

  const current = projects.find((element) => element.id === Number(params.id));

  return (
    <main className="lg:flex pt-24 gap-6  my-0 mx-auto justify-center">
      <section className="text-text-primary dark:text-light-text-primary">
        <ProjectCardFull {...current!} />
      </section>
      <section className="bg-surface-primary dark:bg-light-surface-primary my-8 p-6 font-medium text-text-primary dark:text-light-text-primary lg:h-fit lg:w-fit lg:rounded-lg lg:my-0">
        <h2 className="font-medium text-xl leading-8">
          Take a look at this project
        </h2>
        <div className="actions flex flex-col gap-4 mt-6">
          {current!.live_demo_url && (
            <a
              className="justify-between w-full primary flex text-base h-fit items-center gap-x-2 bg-primary-500 hover:bg-primary-400 py-4 px-4 rounded-lg transition-colors"
              href={project1.live_demo_url}
              target="blank"
            >
              <i className="text-2xl">
                <PiGlobe />
              </i>
              Live Demo
              <i className="text-2xl">
                <GoArrowUpRight />
              </i>
            </a>
          )}
          <a
            className="justify-between w-full primary flex text-base h-fit items-center gap-x-2 bg-surface-secondary dark:bg-light-surface-secondary hover:bg-surface-tertiary dark:hover:bg-light-surface-tertiary py-4 px-4 rounded-lg transition-colors"
            href={current!.repository_url}
            target="blank"
          >
            <i className="text-2xl">
              <DiGithubBadge />
            </i>
            Code
            <i className="text-2xl">
              <GoArrowUpRight />
            </i>
          </a>
        </div>
      </section>
    </main>
  );
}
