import "../Styles/NavBar.css";

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

export default NavBar;