import "../Styles/SocialMedia.css";
  
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

export default SocialMedia;