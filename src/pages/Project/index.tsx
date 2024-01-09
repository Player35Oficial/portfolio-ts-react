import { FaArrowUp } from "react-icons/fa6";
import {
  ButtonThree,
  ButtonThreeSecondary,
  IconButton,
} from "../../components/Buttons";
import { ProjectCardFull } from "../../components/ProjectCard";
import { PiGlobe } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { DiGithubBadge } from "react-icons/di";

export default function Project() {
  return (
    <>
      <div className="pt-24 text-text-primary">
        <ProjectCardFull />
      </div>
      <section className="bg-surface-primary my-8 p-6 font-medium text-text-primary">
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
      <footer className="text-text-secondary py-6 px-4 flex flex-col gap-4 ">
        <p className="text-sm">
          Yuri Santana 2023. Layout based on{" "}
          <a
            className="underline hover:text-secondary transition-colors"
            href="https://www.figma.com/community/file/1303713673750465529"
          >
            Rocketseat's
          </a>{" "}
          template
        </p>
        <div className="flex items-center justify-evenly">
          <a
            className="hover:text-secondary transition-colors"
            href="https://github.com/Player35Oficial"
          >
            Github
          </a>
          <a
            className="hover:text-secondary transition-colors"
            href="https://www.linkedin.com/in/yuri-player35/"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-secondary transition-colors"
            href="https://www.instagram.com/player35_dev/"
          >
            Instagram
          </a>
          <IconButton icon={FaArrowUp} />
        </div>
      </footer>
    </>
  );
}
