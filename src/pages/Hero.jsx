import "../Styles/Hero.css";

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

export default Hero;