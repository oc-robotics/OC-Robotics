import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Team from "./Team";
import Activities from "./Activities";
import SocialMedia from "./SocialMedia";
// import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Header = ({ scrollToSection }) => {
  return (
    <header className="main-header">
      <NavBar scrollToSection={scrollToSection} />
    </header>
  );
};

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container">
      <Header scrollToSection={scrollToSection} />
      <Hero />
      <Team />
      <Activities />
      <SocialMedia />
    </div>
  );
};

export default Home;
