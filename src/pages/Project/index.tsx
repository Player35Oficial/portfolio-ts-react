import { ButtonThree, ButtonThreeSecondary } from "../../components/Buttons";
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
      <section className="text-text-primary ">
        <ProjectCardFull {...current!} />
      </section>
      <section className="bg-surface-primary my-8 p-6 font-medium text-text-primary lg:h-fit lg:w-fit lg:rounded-lg lg:my-0">
        <h2 className="font-medium text-xl leading-8">
          Take a look at this project
        </h2>
        <div className="actions flex flex-col gap-4 mt-6">
          <ButtonThree
            label="Live demo"
            icon={PiGlobe}
            icon2={GoArrowUpRight}
          />
          <ButtonThreeSecondary
            label="Code"
            icon={DiGithubBadge}
            icon2={GoArrowUpRight}
          />
        </div>
      </section>
    </main>
  );
}
