import FirstImage from "../../assets/telecommuting-animate.svg";
import { Button, ButtonSecondary } from "../../components/Buttons";
import { FaFileLines, FaArrowRightLong } from "react-icons/fa6";
import Arrow from "../../assets/arrow.svg";

export default function Home() {
  return (
    <main className="text-text-primary text-pink pt-20">
      <div className="pt-20 h-auto" id="home">
        <h1 className="text-3xl font-bold font-kalam">Home</h1>
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
                enthusiast in building web applications using technologies such
                as Javascript, Angular , and Node.js.
              </p>
            </div>
          </div>
          <div className="actions flex gap-4">
            <ButtonSecondary
              label="My resume"
              icon={FaFileLines}
              reverse={true}
            />
            <Button label="Get in touch" icon={FaArrowRightLong} />
          </div>
        </div>
        <img className="absolute right-16 -bottom-16" src={Arrow} alt="arrow" />
      </div>
      <div className="pt-20 h-screen bg-surface-primary" id="about">
        <h1 className="text-3xl font-bold font-kalam ">About</h1>
      </div>
      <div className="pt-20 h-fit py-12 px-6" id="projects">
        <p className="text-base text-secondary text-center font-kalam ">
          Projects
        </p>
        <h2 className="text-2xl text-center font-bold mb-10">
          Take a look at my highlighted projects
        </h2>
        <div className="projects-container flex gap-6 flex-col"></div>
      </div>
      <div className="pt-20 h-screen" id="contact">
        <h1 className="text-3xl font-bold font-kalam ">Contacts</h1>
      </div>
    </main>
  );
}
