import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Recruitment from "./pages/recruitment";
import Contact from "./pages/contact";
import Sponsors from "./pages/sponsors";
import Team from "./pages/team";
import Robots from "./pages/robots";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
