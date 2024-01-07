import FirstImage from "../../assets/telecommuting-animate.svg";
import {
  Button,
  ButtonSecondary,
  IconButton,
  IconButtonSecondary,
} from "../../components/Buttons";
import { FaFileLines, FaArrowRightLong, FaArrowUp } from "react-icons/fa6";
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

export default function Home() {
  return (
    <>
      <main className="text-text-primary text-pink pt-20">
        <div className="pt-20 h-auto" id="home">
          <div className="flex px-6 py-12 flex-col gap-6">
            <div className="img-container">
              <img src={FirstImage} alt="presentation image" />
            </div>
            <div className="info flex flex-col gap-6">
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
            </div>
            <div className="actions flex gap-4 max-[440px]:justify-center">
              <ButtonSecondary
                label="My resume"
                icon={FaFileLines}
                reverse={true}
              />
              <Button label="Get in touch" icon={FaArrowRightLong} />
            </div>
          </div>
          <img
            className="absolute right-[16vw] -bottom-[16vw]"
            src={Arrow}
            alt="arrow"
          />
        </div>
        <div className="pt-20 h-auto bg-surface-primary" id="about">
          <div>
            {/* Image */}
            <img src={DevFigure} alt="dev figure" />
            {/* Content */}
            <div className="flex flex-col px-6 py-12">
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
              <Button label="My resume" icon={FaFileLines} reverse={true} />
            </div>
          </div>
        </div>
        <div className="pt-20 h-fit py-12 px-6" id="projects">
          <p className="text-base text-secondary text-center font-kalam ">
            Projects
          </p>
          <h2 className="text-2xl text-center font-bold mb-10">
            Take a look at my highlighted projects
          </h2>
          <div className="flex justify-center">
            <ButtonSecondary label="See all" icon={FaArrowRightLong} />
          </div>
          <div className="projects-container flex gap-6 flex-col"></div>
        </div>
        <div className="py-12 h-auto bg-surface-primary px-6" id="contact">
          <div>
            <img src={ContactFigure} alt="contact figure" />
            <p className="text-base font-kalam text-secondary mb-2">Contacts</p>
            <div className="flex flex-col gap-4">
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
          <div>
            <form className="flex flex-col gap-4 mt-12">
              <input
                className="bg-surface-background placeholder-text-secondary px-4 py-3 rounded-lg w-full focus-visible:ring focus-visible:ring-secondary"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
              <input
                className="bg-surface-background placeholder-text-secondary px-4 py-3 rounded-lg w-full focus-visible:ring focus-visible:ring-secondary"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <textarea
                className="bg-surface-background placeholder-text-secondary px-4 py-3 mb-4 rounded-lg w-full focus-visible:ring focus-visible:ring-secondary resize-none"
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
