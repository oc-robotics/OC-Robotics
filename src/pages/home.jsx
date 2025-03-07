import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

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

const Header = ({ scrollToSection }) => {
  return (
    <header className="main-header">
      <NavBar scrollToSection={scrollToSection} />
    </header>
  );
};

const NavBar = ({ scrollToSection }) => {
  return (
    <nav>
      <div className="home-logo">
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>OC Robotics</a>
      </div>
      <ul className="nav-items">
        <li>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a>
        </li>
        <li>
          <a href="#team" onClick={(e) => {
            e.preventDefault();
            scrollToSection('team');
          }}>Team</a>
        </li>
        <li>
          <a href="#join" onClick={(e) => {
            e.preventDefault();
            scrollToSection('join');
          }}>Join Us</a>
        </li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1>OC Robotics</h1>
        <p className="hero-subtitle">Innovating Tomorrow, Today</p>
        <p className="hero-description">
          We are Orange Coast College's newest robotics club, bringing together passionate students
          to explore the fascinating world of robotics. Join us in our journey of learning,
          building, and innovating together.
        </p>
        <a href="#join" className="cta-button" onClick={(e) => {
          e.preventDefault();
          document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
        }}>
          Be Part of Our Journey
        </a>
      </div>
    </section>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Name 1",
      role: "President",
      image: "/team/member1.jpg",
      description: "Computer Science major with a passion for robotics"
    },
    {
      name: "Name 2",
      role: "Vice President",
      image: "/team/member2.jpg",
      description: "Engineering enthusiast focused on mechanical design"
    },
    
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2>Our Team</h2>
        <p className="section-description">Meet the passionate individuals driving innovation in robotics</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ name, role, image, description }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <h2>What We Do</h2>
        <p className="section-description">Explore the exciting activities our club offers</p>
        <div className="activities-grid">
          <ActivityCard 
            title="Build & Learn"
            description="Get hands-on experience building robots and learning about mechanical design, electronics, and programming."
            icon="🤖"
          />
          <ActivityCard 
            title="Weekly Workshops"
            description="Join our weekly workshops where we explore different aspects of robotics and work on exciting projects."
            icon="🔧"
          />
          <ActivityCard 
            title="Team Projects"
            description="Collaborate with fellow members on various robotics projects and prepare for future competitions."
            icon="👥"
          />
        </div>
      </div>
    </section>
  );
};

const ActivityCard = ({ title, description, icon }) => {
  return (
    <div className="activity-card">
      <div className="activity-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <section className="social-section" id="join">
      <div className="container">
        <h2>Join Our Community</h2>
        <p className="section-description">Ready to be part of something amazing? Connect with us through any of these platforms!</p>
        <div className="social-links">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            Discord
          </a>
          <a href="mailto:contact@ocrobotics.com" className="social-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
