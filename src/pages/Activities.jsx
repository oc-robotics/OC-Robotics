import "../Styles/Activities.css";
  
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

export default Activities;