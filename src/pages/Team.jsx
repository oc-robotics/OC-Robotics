import "../Styles/Team.css";
import TeamMember from "./TeamMember";

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

const Team = () => {
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

export default Team;