import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/desktop";
import NavbarMobile from "./components/Navbar/mobile";
import logo from "./assets/YuriSantana.svg";
import darkLogo from "./assets/YuriSantana-dark.svg";
import Project from "./pages/Project";
import { IconButton } from "./components/Buttons";
import { FaArrowUp } from "react-icons/fa6";

function App() {
  const windowWidth = window.innerWidth;

  function scrollToTop() {
    scrollTo(0, 0);
  }

  return (
    <Router>
      {windowWidth > 768 ? (
        <Navbar navbarLogo={logo} navbarLogoDark={darkLogo} />
      ) : (
        <NavbarMobile navbarLogo={logo} />
      )}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/project/:id" Component={Project} />
      </Routes>
      <footer className="text-text-secondary dark:text-light-text-secondary py-6 lg:px-20 px-4 flex flex-col lg:flex-row lg:justify-between gap-4 transition-colors">
        <p className="text-sm">
          Yuri Santana 2023. Layout based on{" "}
          <a
            className="underline hover:text-secondary dark:hover:text-primary-500 transition-colors"
            href="https://www.figma.com/community/file/1303713673750465529"
          >
            Rocketseat's
          </a>{" "}
          template
        </p>
        <div className="flex lg:gap-6 items-center justify-evenly">
          <a
            className="hover:text-secondary dark:hover:text-primary-500 transition-colors"
            href="https://github.com/Player35Oficial"
          >
            Github
          </a>
          <a
            className="hover:text-secondary dark:hover:text-primary-500 transition-colors"
            href="https://www.linkedin.com/in/yuri-player35/"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-secondary dark:hover:text-primary-500 transition-colors"
            href="https://www.instagram.com/player35_dev/"
          >
            Instagram
          </a>
          <i className="text-text-primary">
            <IconButton icon={FaArrowUp} action={scrollToTop} />
          </i>
        </div>
      </footer>
    </Router>
  );
}

export default App;
