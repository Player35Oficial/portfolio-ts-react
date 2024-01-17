// import { IconType } from "react-icons";
import { IconType } from "react-icons";
import Default from "../../assets/default_project_image.png";
import { ProjectCardProps } from "../../data/Projects";
import { IconButton } from "../Buttons";
import { DiGithubBadge } from "react-icons/di";
import { GoArrowUpRight } from "react-icons/go";
import React, { useState } from "react";

// interface ProjectCardProps {
//   image: string;
//   created_at: string;
//   finished_at: string;
//   techs: string;
//   project_name: string;
//   short_project_description: string;
// }

export function ProjectCard(props: ProjectCardProps) {
  const {
    image,
    created_at,
    finished_at,
    techs,
    project_name,
    short_project_description,
  } = props;

  // ignorar o erro de falta de argumentos dentro da condicional de função no retorno da função abaixo
  function convertToReactNode(
    icon: IconType | (() => JSX.Element) | JSX.Element
  ): JSX.Element {
    if (typeof icon === "function") {
      return icon();
    }

    // Se icon não for uma função, assumimos que é um JSX.Element ou um tipo equivalente.
    return icon as JSX.Element;
  }

  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseEnter() {
    console.log("entrou");
    setIsMouseOver(true);
  }

  function handleMouseLeave() {
    console.log("saiu");
    setIsMouseOver(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative max-[440px]:p-4 p-6 flex-col bg-surface-primary max-[440px]:w-full h-fit w-[24rem] rounded-2xl hover:shadow-[0_0_45px_0_rgba(125,255,175,0.24)] border-[1px] border-surface-primary hover:border-[1px] hover:border-secondary hover:cursor-pointer transition "
    >
      <div
        className={
          isMouseOver
            ? "flex flex-col absolute gap-2 right-4 top-4 ease-in transition-all"
            : "hidden"
        }
      >
        <IconButton icon={DiGithubBadge} />
        <IconButton icon={GoArrowUpRight} />
      </div>
      <div className="bg-primary-400 rounded-t-lg h-40 flex justify-center">
        <img
          className="rounded-t-lg h-40"
          src={image || Default}
          alt="alt text"
        />
      </div>
      <div className="my-4 flex justify-between items-center">
        <p className="text-text-secondary">
          {created_at && finished_at
            ? `${created_at} - ${finished_at}`
            : "in development"}
        </p>
        <div className="stacks text-techs-colors flex text-3xl gap-4">
          {techs.map((icon, index) => (
            <span key={index}>{convertToReactNode(icon)}</span>
          ))}
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

export function ProjectCardFull() {
  return (
    <article className="lg:max-w-[800px] lg:rounded-lg">
      <div className="flex pb-12 flex-col bg-surface-primary min-[320px]:w-full h-fit w-[24rem] gap-6 lg:rounded-lg">
        <div className="bg-primary-400 h-40 lg:rounded-t-lg overflow-hidden">
          <img className="h-40 w-full" src={"" || Default} alt="alt text" />
        </div>
        <div className="my-4 flex justify-between  px-4">
          <p className="text-text-secondary">Jul - Dec 2022</p>
          <div className="stacks text-techs-colors">resolver</div>
        </div>
        <h2 className="text-4xl px-4 font-medium text-text-primary">
          Feedback Widget
        </h2>
        <div className="text-text-secondary text-lg px-4 ">
          <p>
            <span className="font-bold leading-8">My role:</span> Full-stack
            developer
          </p>
          <p>
            <span className="font-bold leading-8">Team:</span> Marcus Souza(PM),
            Ilana Mallak (UX/UI Designer)
          </p>
        </div>
        <div className=" w-[100%] gap-2 flex flex-col text-lg text-text-secondary px-4">
          <div className="flex flex-col gap-6 leading-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda at dolorum, illo qui porro. Illo qui porro.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda at dolorum, illo qui porro necessitatibus quibusdam
              illum maxime expedita ipsa eaque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda at dolorum, illo qui porro necessitatibus quibusdam
              illum maxime expedita ipsa eaque totam quisquam ad perspiciatis
              reiciendis veniam culpa ut nesciunt.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
