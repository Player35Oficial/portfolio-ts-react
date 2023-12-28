import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/desktop";
import logo from "./assets/YuriSantana.svg";

function App() {
  return (
    <Router>
      <Navbar navbarLogo={logo} />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
