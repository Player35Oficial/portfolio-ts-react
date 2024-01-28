import { LuMenu, LuLanguages, LuSunMedium } from "react-icons/lu";
import { IconButton, IconButtonSecondary } from "../../Buttons";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../context/lang-context";

interface NavBarProps {
  navbarLogo: string;
  navbarLogoDark?: string;
}

export default function NavbarMobile(props: NavBarProps) {
  const { navbarLogo, navbarLogoDark } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  const local = useLocation();
  useEffect(() => {
    console.log(local);
  }, [local]);

  const activeStyle = "text-text-primary font-bold p-2";

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

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

  const { lang, toggleLang } = useContext(LangContext);

  return (
    <header className="fixed flex z-20 justify-between dark:bg-light-surface-background bg-surface-background drop-shadow-lg p-4 w-[100%] h-20 items-center">
      <div>
        <img
          src={
            currentTheme === "light" ? navbarLogo : navbarLogoDark || navbarLogo
          }
          alt=""
        />
      </div>
      <div className="text-text-primary text-4xl">
        <IconButton icon={LuMenu} action={handleMenu} />
      </div>

      {menuIsOpen && (
        <div className="bg-surface-primary absolute top-20 right-0 w-[87vw] h-screen divide-y divide-surface-secondary gap-4 flex-col flex animate-appear">
          {lang === "en-US" ? (
            <nav className="flex gap-4 md:flex-col text-text-secondary dark:text-light-text-secondary max-[768px]:flex-col max-[768px]:items-end max-[768px]:pr-6 max-[768px]:pt-6">
              <a
                onClick={handleMenu}
                href="/portfolio-ts-react#home"
                className={local.hash === "/#home" ? activeStyle : "p-2"}
              >
                Home
              </a>
              <a
                onClick={handleMenu}
                href="/portfolio-ts-react#about"
                className={local.hash === "#about" ? activeStyle : "p-2"}
              >
                About
              </a>
              <a
                onClick={handleMenu}
                className={local.hash === "#projects" ? activeStyle : "p-2"}
                href="/portfolio-ts-react#projects"
              >
                Projects
              </a>
              <a
                onClick={handleMenu}
                className={local.hash === "#contact" ? activeStyle : "p-2"}
                href="/portfolio-ts-react#contact"
              >
                Contact
              </a>
            </nav>
          ) : (
            <nav className="flex gap-4 text-text-secondary dark:text-light-text-secondary max-[768px]:flex-col max-[768px]:items-end max-[768px]:pr-6 max-[768px]:pt-6">
              <a
                onClick={handleMenu}
                href="/portfolio-ts-react#home"
                className={local.hash === "/#home" ? activeStyle : "p-2"}
              >
                Início
              </a>
              <a
                onClick={handleMenu}
                href="/portfolio-ts-react#about"
                className={local.hash === "#about" ? activeStyle : "p-2"}
              >
                Sobre
              </a>
              <a
                onClick={handleMenu}
                className={local.hash === "#projects" ? activeStyle : "p-2"}
                href="/portfolio-ts-react#projects"
              >
                Projetos
              </a>
              <a
                onClick={handleMenu}
                className={local.hash === "#contact" ? activeStyle : "p-2"}
                href="/portfolio-ts-react#contact"
              >
                Contato
              </a>
            </nav>
          )}

          <div className="actions text-text-primary dark:text-light-text-primary flex gap-4 pt-4 mx-8 justify-end">
            <IconButtonSecondary icon={LuLanguages} action={toggleLang} />
            <IconButtonSecondary icon={LuSunMedium} action={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
}
