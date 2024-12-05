import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <NavBar />
    </header>
  );
};

const NavBar = () => {
  return (
    <nav>
      <div className="home-logo">
        <Link to="/">OCRG</Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/robots">Robots</Link>
        </li>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="/recruitment">Recruitment</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Robotics Club</h1>
        <p className="text-red-500">
          Building the future of robotics, one innovation at a time.
        </p>
        <JoinUsComponent />
      </div>
    </section>
  );
};

const JoinUsComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleJoinClick = async () => {
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }
    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
        joinedAt: serverTimestamp(),
      });
      alert("Thank you for joining!");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <div className="join-us-container">
      <h2>Join Us</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleJoinClick}>Join Us</button>
    </div>
  );
};

export default Home;
