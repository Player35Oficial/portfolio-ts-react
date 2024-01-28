import FirstImage from "../../assets/telecommuting-animate.svg";
import { Button } from "../../components/Buttons";
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
import { FormEvent, useEffect, useState } from "react";
import {
  ProjectCardProps,
  project1,
  project2,
  project3,
} from "../../data/Projects";
import { ProjectCard } from "../../components/ProjectCard";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [projects, setProjects] = useState([project1, project2, project3]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setProjects(projects);
  }, [projects]);

  function handleScroll() {
    open("/#contact", "_self");
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email,
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAIJS_SERVICE_ID,
        import.meta.env.VITE_EMAIJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
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
                <p className="role text-2xl font-medium dark:text-light-text-primary">
                  Javascript Developer and design enthusiast
                </p>
                <p className="auto-description text-text-secondary text-base dark:text-light-text-secondary">
                  More than 2 years of experience in Javascript development.
                  Enthusiast in building web applications using technologies
                  such as Javascript/Typescript, Angular and Node.js.
                </p>
              </div>
              <div className="actions flex gap-4 max-[440px]:justify-center">
                <a
                  className="primary flex text-base h-fit w-fit flex-row-reverse items-center gap-x-2 bg-surface-secondary dark:bg-light-surface-secondary dark:text-light-text-primary hover:bg-surface-tertiary dark:hover:bg-light-surface-tertiary py-4 px-4 rounded-lg transition-colors"
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
          className="py-8 lg:mt-20 sm:mt-8 xl:px-16 xl:m-10 xl:rounded-2xl lg:px-16 lg:m-10 lg:rounded-2xl h-auto bg-surface-primary dark:bg-light-surface-primary scroll-m-20"
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
                <span className="block font-kalam text-secondary dark:text-light-text-secondary mb-2">
                  About me
                </span>
                <h2 className="role text-2xl dark:text-light-text-primary font-medium mb-4">
                  I'm a passionate software developer looking for my first IT
                  opportunity
                </h2>
                <p className="text-text-secondary dark:text-light-text-secondary mb-12">
                  Beyond to coding, I am an apple tea enthusiast, a dog lover
                  and a self-taught philosopher who likes to spend his free time
                  studying Stoicism. At the moment I am looking for
                  opportunities to take my skills to technology companies in
                  Brazil, with the prospect of being admitted to international
                  vacancies soon.
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
          <p className="text-base text-secondary dark:text-light-text-secondary text-center font-kalam ">
            Projects
          </p>
          <h2 className="text-2xl text-center dark:text-light-text-primary font-bold">
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
                repository_url={project.repository_url}
                key={project.id}
                id={project.id}
              />
            ))}
          </div>
          <div className="flex justify-center"></div>
          <div className="projects-container flex gap-6 flex-col"></div>
        </div>
        <div
          className="py-12 h-auto bg-surface-primary dark:bg-light-surface-primary px-6 scroll-m-20 lg:flex lg:items-center lg:px-16 lg:m-10 lg:rounded-2xl xl:justify-between gap-32"
          id="contact"
        >
          <div className="">
            <img
              src={ContactFigure}
              className="sm:h-96 lg:h-40 xl:h-40"
              alt="contact figure"
            />
            <div className="flex flex-col gap-4 lg:max-w-xl xl:max-w-xl">
              <p className="text-base font-kalam text-secondary dark:text-text-secondary mb-2 xl:-mb-2 xl:mt-8">
                Contacts
              </p>
              <h2 className="text-2xl font-bold dark:text-light-text-primary">
                Enjoyed my work? Let's work together
              </h2>
              <p className="dark:text-light-text-secondary">
                I'm always up for a chat. Pop me an email at{" "}
                <a
                  href="mailto:yuri.dev35@gmail.com"
                  className="text-secondary underline dark:text-primary-400"
                >
                  yuri.dev35@gmail.com
                </a>{" "}
                or give me a shout on social media.
              </p>
              <div className="actions flex gap-2">
                <a
                  className="text-2xl p-2 bg-surface-secondary dark:bg-light-surface-secondary hover:bg-surface-tertiary dark:hover:bg-light-surface-tertiary rounded-lg transition-colors"
                  href="https://github.com/Player35Oficial"
                  target="blank"
                >
                  <span className="dark:text-light-text-primary">
                    <DiGithubBadge />
                  </span>
                </a>
                <a
                  className="text-2xl p-2 bg-surface-secondary dark:bg-light-surface-secondary hover:bg-surface-tertiary dark:hover:bg-light-surface-tertiary rounded-lg transition-colors"
                  href="https://www.linkedin.com/in/yuri-player35/"
                  target="blank"
                >
                  <span className="dark:text-light-text-primary">
                    <IoLogoLinkedin />
                  </span>
                </a>
                <a
                  className="text-2xl p-2 bg-surface-secondary dark:bg-light-surface-secondary hover:bg-surface-tertiary dark:hover:bg-light-surface-tertiary rounded-lg transition-colors"
                  href="https://www.instagram.com/player35_dev/"
                  target="blank"
                >
                  <span className="dark:text-light-text-primary">
                    <IoLogoInstagram />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form className="flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
              <input
                className="bg-surface-background dark:bg-light-surface-background placeholder-text-secondary dark:placeholder-light-text-secondary px-4 py-3 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-surface-background dark:bg-light-surface-background placeholder-text-secondary dark:placeholder-light-text-secondary px-4 py-3 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="bg-surface-background dark:bg-light-surface-background placeholder-text-secondary dark:placeholder-light-text-secondary px-4 py-3 mb-4 rounded-xl w-full focus-visible:ring focus-visible:ring-secondary resize-none"
                name="message"
                id="message"
                placeholder="Your message"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <Button label="Send me a message" icon={FaArrowRightLong} />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
