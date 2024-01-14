import { IconType } from "react-icons";
import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoAngular,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiJest } from "react-icons/si";

export interface ProjectCardProps {
  id: number;
  image: string;
  created_at: string;
  finished_at: string;
  techs: IconType[];
  project_name: string;
  short_project_description: string;
}

// Resolver problema de renderização da imagem com os caminhos
const project1: ProjectCardProps = {
  id: 1,
  image: "",
  created_at: "Juny, 2023",
  finished_at: "September, 2023",
  techs: [BiLogoNodejs, BiLogoTypescript, SiJest],
  project_name: "API Rest - Church",
  short_project_description: "Open source REST API.",
};

const project2: ProjectCardProps = {
  id: 2,
  image: "",
  created_at: "September, 2023",
  finished_at: "Octuber, 2023",
  techs: [BiLogoTypescript, BiLogoAngular],
  project_name: "Angular Church",
  short_project_description: "Open Source Church Tithe/Offering Manager.",
};

const project3: ProjectCardProps = {
  id: 3,
  image: "",
  created_at: "January, 2024",
  finished_at: "January, 2024",
  techs: [BiLogoReact, BiLogoTypescript, BiLogoTailwindCss],
  project_name: "Strategic Portfolio",
  short_project_description: "Source code of this site.",
};

export { project1, project2, project3 };
