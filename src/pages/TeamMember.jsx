import "../Styles/TeamMember.css"

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

export default TeamMember;