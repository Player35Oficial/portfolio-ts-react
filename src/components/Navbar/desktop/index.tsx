import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "../../Buttons";
import { LuLanguages, LuSunMedium } from "react-icons/lu";

interface NavBarProps {
  navbarLogo: string;
}

export default function Navbar(props: NavBarProps) {
  const { navbarLogo } = props;

  const local = useLocation();
  useEffect(() => {
    console.log(local);
  }, [local]);

  const activeStyle = "text-text-primary font-bold p-2";

  return (
    <header className="fixed flex z-20 justify-between bg-surface-background drop-shadow-lg px-20 w-[100%] h-20 items-center">
      <div>
        <img src={navbarLogo} alt="developer logo" />
      </div>
      <div className="flex gap-4">
        <nav className="flex gap-4 text-text-secondary">
          <a
            href="#home"
            className={local.hash === "#home" ? activeStyle : "p-2"}
          >
            Home
          </a>
          <a
            href="#about"
            className={local.hash === "#about" ? activeStyle : "p-2"}
          >
            About
          </a>
          <a
            className={local.hash === "#projects" ? activeStyle : "p-2"}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={local.hash === "#contact" ? activeStyle : "p-2"}
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <div className="text-text-primary flex items-center gap-4">
          <IconButton icon={LuLanguages} />
          <IconButton icon={LuSunMedium} />
        </div>
      </div>
    </header>
  );
}
