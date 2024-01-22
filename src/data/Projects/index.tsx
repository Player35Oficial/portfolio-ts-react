import { IconType } from "react-icons";
import {
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoAngular,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiJest } from "react-icons/si";
import ApiRestCover from "../../assets/api-rest-church.png";
import AngularChurchCover from "../../assets/api-church-cover.png";
import StrategicCover from "../../assets/strategic-portfolio-cover.png";

export interface ProjectCardProps {
  id: number;
  image: string;
  created_at: string;
  finished_at: string;
  techs: IconType[];
  project_name: string;
  short_project_description: string;
  more?: {
    my_role: string;
    team: string[] | string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  live_demo_url?: string;
  repository_url: string;
}

const project1: ProjectCardProps = {
  id: 1,
  image: ApiRestCover,
  created_at: "Juny, 2023",
  finished_at: "September, 2023",
  techs: [BiLogoNodejs, BiLogoTypescript, SiJest],
  project_name: "API Rest - Church",
  short_project_description: "Open source REST API.",
  more: {
    my_role: "Backend Developer, Database Modeler",
    team: "Me",
    paragraph1: "This API has developed to improve API development skills.",
    paragraph2:
      "The enhanced skills include: Route Management with Express; Body, query and Params validations with Yup; Automated tests with JEST.",
    paragraph3:
      "The prject has modeled based on a Church context that a little department of Finances needed a platform to register Inputs and outputs of contributions",
  },
  repository_url: "https://github.com/Player35Oficial/api-rest-church",
};

const project2: ProjectCardProps = {
  id: 2,
  image: AngularChurchCover,
  created_at: "September, 2023",
  finished_at: "Octuber, 2023",
  techs: [BiLogoTypescript, BiLogoAngular],
  project_name: "Angular Church",
  short_project_description: "Open Source Church Tithe/Offering Manager.",
  more: {
    my_role: "Frontend Developer",
    team: "Me",
    paragraph1:
      "A Responsive Website to access a system of contributions in a church context",
    paragraph2:
      "It has been developed using Angular (and Typescript), while i was studying about it",
    paragraph3: "",
  },
  repository_url: "https://github.com/Player35Oficial/angular-church",
};

const project3: ProjectCardProps = {
  id: 3,
  image: StrategicCover,
  created_at: "January, 2024",
  finished_at: "January, 2024",
  techs: [BiLogoReact, BiLogoTypescript, BiLogoTailwindCss],
  project_name: "Strategic Portfolio",
  short_project_description: "Source code of this site.",
  more: {
    my_role: "Frontend Developer",
    team: "Me",
    paragraph1: "Is this Website, that you using at this moment",
    paragraph2:
      "It has been developed using React with Typescript and Tailwind",
    paragraph3:
      "The purpose to the development this site has to improve my React and Typescript skills and learn Tailwind CSS in practice. And update my last portfolio site.",
  },
  repository_url:
    "https://github.com/Player35Oficial/strategic-portfolio-react-typescript",
};

export { project1, project2, project3 };
