import { useLocation } from "react-router-dom";
import { IconButton } from "../../Buttons";
import { LuLanguages, LuSunMedium } from "react-icons/lu";

interface NavBarProps {
  navbarLogo: string;
}

export default function Navbar(props: NavBarProps) {
  const { navbarLogo } = props;

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

  const local = useLocation();

  const activeStyle =
    "text-text-primary font-bold p-2 dark:text-light-text-primary";

  return (
    <header className="fixed flex z-20 justify-between dark:bg-light-surface-background bg-surface-background drop-shadow-lg px-20 w-[100%] h-20 items-center">
      <div>
        <img src={navbarLogo} alt="developer logo" />
      </div>
      <div className="flex gap-4">
        <nav className="flex gap-4 text-text-secondary dark:text-light-text-secondary">
          <a
            href="/#home"
            className={local.hash === "/#home" ? activeStyle : "p-2"}
          >
            Home
          </a>
          <a
            href="/#about"
            className={local.hash === "#about" ? activeStyle : "p-2"}
          >
            About
          </a>
          <a
            className={local.hash === "#projects" ? activeStyle : "p-2"}
            href="/#projects"
          >
            Projects
          </a>
          <a
            className={local.hash === "#contact" ? activeStyle : "p-2"}
            href="/#contact"
          >
            Contact
          </a>
        </nav>
        <div className="text-text-primary dark:text-light-surface-primary flex items-center gap-4">
          <IconButton icon={LuLanguages} />
          <IconButton icon={LuSunMedium} action={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
