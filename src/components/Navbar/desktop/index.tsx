import { useLocation } from "react-router-dom";
import { IconButton } from "../../Buttons";
import { LuLanguages, LuSunMedium } from "react-icons/lu";
import { useContext, useState } from "react";
import { LangContext } from "../../../context/lang-context";

interface NavBarProps {
  navbarLogo: string;
  navbarLogoDark?: string;
}

export default function Navbar(props: NavBarProps) {
  const { navbarLogo, navbarLogoDark } = props;
  const local = useLocation();

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  const { lang, toggleLang } = useContext(LangContext);

  function toggleTheme() {
    const html = window.document.querySelector("html");

    if (localStorage.getItem("theme") == "dark") {
      html?.classList.remove("dark");
      html?.classList.add("light");
      setCurrentTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      html?.classList.remove("light");
      html?.classList.add("dark");
      setCurrentTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  const activeStyle =
    "text-text-primary font-bold p-2 dark:text-light-text-primary";

  return (
    <header className="fixed flex z-20 justify-between dark:bg-light-surface-background bg-surface-background drop-shadow-lg px-20 w-[100%] h-20 items-center">
      <div>
        <img
          src={
            currentTheme === "light" ? navbarLogo : navbarLogoDark || navbarLogo
          }
          alt="developer logo"
        />
      </div>
      <div className="flex gap-4">
        {lang === "en-US" ? (
          <nav className="flex gap-4 text-text-secondary dark:text-light-text-secondary">
            <a
              href="/portfolio-ts-react#home"
              className={local.hash === "/#home" ? activeStyle : "p-2"}
            >
              Home
            </a>
            <a
              href="/portfolio-ts-react#about"
              className={local.hash === "#about" ? activeStyle : "p-2"}
            >
              About
            </a>
            <a
              className={local.hash === "#projects" ? activeStyle : "p-2"}
              href="/portfolio-ts-react#projects"
            >
              Projects
            </a>
            <a
              className={local.hash === "#contact" ? activeStyle : "p-2"}
              href="/portfolio-ts-react#contact"
            >
              Contact
            </a>
          </nav>
        ) : (
          <nav className="flex gap-4 text-text-secondary dark:text-light-text-secondary">
            <a
              href="/portfolio-ts-react#home"
              className={local.hash === "/#home" ? activeStyle : "p-2"}
            >
              Início
            </a>
            <a
              href="/portfolio-ts-react#about"
              className={local.hash === "#about" ? activeStyle : "p-2"}
            >
              Sobre
            </a>
            <a
              className={local.hash === "#projects" ? activeStyle : "p-2"}
              href="/portfolio-ts-react#projects"
            >
              Projetos
            </a>
            <a
              className={local.hash === "#contact" ? activeStyle : "p-2"}
              href="/portfolio-ts-react#contact"
            >
              Contato
            </a>
          </nav>
        )}

        <div className="text-text-primary dark:text-light-surface-primary flex items-center gap-4">
          <IconButton icon={LuLanguages} action={toggleLang} />
          <IconButton icon={LuSunMedium} action={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
