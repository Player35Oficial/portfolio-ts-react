import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/desktop";
import NavbarMobile from "./components/Navbar/mobile";
import logo from "./assets/YuriSantana.svg";
import Project from "./pages/Project";

function App() {
  const windowWidth = window.innerWidth;

  return (
    <Router>
      {windowWidth > 768 ? (
        <Navbar navbarLogo={logo} />
      ) : (
        <NavbarMobile navbarLogo={logo} />
      )}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/project/:id" Component={Project} />
      </Routes>
    </Router>
  );
}

export default App;
