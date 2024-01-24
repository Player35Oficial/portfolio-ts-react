import { LuMenu, LuLanguages, LuSunMedium } from "react-icons/lu";
import { IconButton, IconButtonSecondary } from "../../Buttons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface NavBarProps {
  navbarLogo: string;
}

export default function NavbarMobile(props: NavBarProps) {
  const { navbarLogo } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
      localStorage.setItem("theme", "light");
    } else {
      html?.classList.remove("light");
      html?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <header className="fixed flex z-20 justify-between dark:bg-light-surface-background bg-surface-background drop-shadow-lg p-4 w-[100%] h-20 items-center">
      <div>
        <img src={navbarLogo} alt="" />
      </div>
      <div className="text-text-primary text-4xl">
        <IconButton icon={LuMenu} action={handleMenu} />
      </div>

      {menuIsOpen && (
        <div className="bg-surface-primary absolute top-20 right-0 w-[87vw] h-screen divide-y divide-surface-secondary gap-4 flex-col flex animate-appear">
          <nav className="flex gap-4 text-text-secondary flex-col text-right pr-6 pt-6">
            <a
              className={local.hash === "#home" ? activeStyle : "p-2"}
              href="/#home"
              onClick={handleMenu}
            >
              Home
            </a>
            <a
              className={local.hash === "#about" ? activeStyle : "p-2"}
              href="#about"
              onClick={handleMenu}
            >
              About
            </a>
            <a
              className={local.hash === "#projects" ? activeStyle : "p-2"}
              href="#projects"
              onClick={handleMenu}
            >
              Projects
            </a>
            <a
              className={local.hash === "#contact" ? activeStyle : "p-2"}
              href="#contact"
              onClick={handleMenu}
            >
              Contact
            </a>
          </nav>

          <div className="actions text-text-primary dark:text-light-text-primary flex gap-4 pt-4 mx-8 justify-end">
            <IconButtonSecondary icon={LuLanguages} />
            <IconButtonSecondary icon={LuSunMedium} action={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
}
