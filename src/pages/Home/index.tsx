import FirstImage from "../../assets/telecommuting-animate.svg";
import {
  Button,
  ButtonSecondary,
  IconButtonSecondary,
} from "../../components/Buttons";
import { FaFileLines, FaArrowRightLong } from "react-icons/fa6";
import Arrow from "../../assets/arrow.svg";
import DevFigure from "../../assets/operating system-amico.svg";
import {
  DiReact,
  DiAngularSimple,
  DiNodejsSmall,
  DiGithubBadge,
} from "react-icons/di";
import {
  IoLogoInstagram,
  IoLogoJavascript,
  IoLogoLinkedin,
} from "react-icons/io5";
import ContactFigure from "../../assets/good-team-pana.svg";
import { useEffect, useState } from "react";
import {
  ProjectCardProps,
  project1,
  project2,
  project3,
} from "../../data/Projects";
import { ProjectCard } from "../../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([project1, project2, project3]);

  useEffect(() => {
    setProjects(projects);
    console.log("Load: ", projects);
  }, [projects]);

  function handleScroll() {
    open("/#contact", "_self");
  }

  return (
    <>
      <main className="text-text-primary text-pink xl:w-max-[1280px] xl:flex xl:flex-col lg:flex lg:flex-col">
        <div className="h-auto lg:mt-20 lg:m-4" id="home">
          <div className="flex px-6 py-12 flex-col lg:flex-row-reverse xl:flex-row-reverse items-center gap-6">
            <div className="img-container lg:w-2/4 xl:w-2/4">
              <img
                src={FirstImage}
                alt="presentation image"
                className="min-h-64"
              />
            </div>
            <div className="info flex flex-col gap-6 xl:w-[600px] lg:w-[600px]">
              <span className="text-[#00000000] bg-clip-text bg-gradient-to-r from-[#9955E8] to-[#7BFFAF] text-4xl font-kalam">
                Hi, I'm Yuri
              </span>
              <div className="details flex flex-col gap-4">
                <p className="role text-2xl font-medium">
                  Javascript Developer and design enthusiast
                </p>
                <p className="auto-description text-text-secondary text-base">
                  Over 2 years of experience in javascript development. I
                  enthusiast in building web applications using technologies
                  such as Javascript, Angular , and Node.js.
                </p>
              </div>
              <div className="actions flex gap-4 max-[440px]:justify-center">
                <a
                  className="primary flex text-base h-fit w-fit flex-row-reverse items-center gap-x-2 bg-surface-secondary hover:bg-surface-tertiary py-4 px-4 rounded-lg transition-colors"
                  href="/public/CV_-_Yuri_Santana_-_Desenvolvedor.pdf"
                  download="CV - Yuri Santana"
                >
                  My Resume
                  <span className="text-2xl">
                    <FaFileLines />
                  </span>
                </a>
                <Button
                  action={handleScroll}
                  label="Get in touch"
                  icon={FaArrowRightLong}
                />
              </div>
            </div>
          </div>
          <img
            className="absolute right-[16vw] -bottom-[16vw] max-[440px]:bottom-56 sm:bottom-72 lg:bottom-[32vw] xl:bottom-[21vw]"
            src={Arrow}
            alt="arrow"
          />
        </div>
        <div
          className="py-8 lg:mt-20 sm:mt-8 xl:px-16 xl:m-10 xl:rounded-2xl lg:px-16 lg:m-10 lg:rounded-2xl h-auto bg-surface-primary scroll-m-20"
          id="about"
        >
          <div className="xl:flex xl:justify-evenly xl:items-center lg:flex lg:justify-evenly lg:items-center">
            {/* Image */}
            <img
              className="sm:h-64 lg:h-80 xl:h-96"
              src={DevFigure}
              alt="dev figure"
            />
            {/* Content */}
            <div className="flex flex-col px-6 py-12 lg:xl:max-w-xl xl:max-w-xl">
              <div className="techs flex gap-4 text-3xl text-techs-colors mb-8">
                <IoLogoJavascript />
                <DiReact />
                <DiAngularSimple />
                <DiNodejsSmall />
              </div>
              <div>
                <span className="block font-kalam text-secondary mb-2">
                  About me
                </span>
                <h2 className="role text-2xl font-medium mb-4">
                  I'm a passionate software developer looking for my first IT
                  opportunity
                </h2>
                <p className="text-text-secondary mb-12">
                  Beyond coding, I'm a coffee enthusiast, a cat lover, and a
                  self-taught artist who enjoys spending my free time doodling.
                  I am currently seeking opportunities to bring my skills and
                  enthusiasm to a tech company in the United States or Europe
                  and am excited about the prospect of relocating to pursue new
                  challenges.
                </p>
              </div>
              <a
                className="primary flex text-base h-fit w-fit flex-row-reverse items-center gap-x-2 bg-primary-500 hover:bg-primary-400 py-4 px-4 rounded-lg transition-colors"
                href="/public/CV_-_Yuri_Santana_-_Desenvolvedor.pdf"
                download="CV - Yuri Santana"
              >
                My Resume
                <span className="text-2xl">
                  <FaFileLines />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-20 h-fit py-12 px-6 scroll-m-20" id="projects">
          <p className="text-base text-secondary text-center font-kalam ">
            Projects
          </p>
          <h2 className="text-2xl text-center font-bold">
            Take a look at my highlighted projects
          </h2>
          <div className="flex gap-8 justify-center my-10 flex-grow flex-wrap">
            {projects.map((project: ProjectCardProps) => (
              <ProjectCard
                created_at={project.created_at.split(",")[0].slice(0, 3)}
                finished_at={
                  project.finished_at.split(",")[0].slice(0, 3) +
                  " " +
                  project.finished_at.split(",")[1]
                }
                image={project.image}
                project_name={project.project_name}
                short_project_description={project.short_project_description}
                techs={project.techs}
                key={project.id}
                id={project.id}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <ButtonSecondary label="See all" icon={FaArrowRightLong} />
          </div>
          <div className="projects-container flex gap-6 flex-col"></div>
        </div>
        <div
          className="py-12 h-auto bg-surface-primary px-6 scroll-m-20 lg:flex lg:items-center lg:px-16 lg:m-10 lg:rounded-2xl xl:justify-between gap-32"
          id="contact"
        >
          <div className="">
            <img
              src={ContactFigure}
              className="sm:h-96 lg:h-40 xl:h-40"
              alt="contact figure"
            />
            <div className="flex flex-col gap-4 lg:max-w-xl xl:max-w-xl">
              <p className="text-base font-kalam text-secondary mb-2 xl:-mb-2 xl:mt-8">
                Contacts
              </p>
              <h2 className="text-2xl font-bold">
                Enjoyed my work? Let's work together
              </h2>
              <p>
                I'm always up for a chat. Pop me an email at{" "}
                <a
                  href="mailto:yuri.dev35@gmail.com"
                  className="text-secondary underline"
                >
                  yuri.dev35@gmail.com
                </a>{" "}
                or give me a shout on social media.
              </p>
              <div className="actions flex gap-2">
                <IconButtonSecondary icon={DiGithubBadge} />
                <IconButtonSecondary icon={IoLogoLinkedin} />
                <IconButtonSecondary icon={IoLogoInstagram} />
              </div>
            </div>
          </div>
          <div className="w-full">
            <form className="flex flex-col gap-4 mt-12">
              <input
                className="bg-surface-background placeholder-text-secondary px-4 py-3 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                className="bg-surface-background placeholder-text-secondary px-4 py-3 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <textarea
                className="bg-surface-background placeholder-text-secondary px-4 py-3 mb-4 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary resize-none"
                name="message"
                id="message"
                placeholder="Your message"
                rows={8}
              ></textarea>

              <Button label="Send me a message" icon={FaArrowRightLong} />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
