import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Carousel, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

const projectData = {
  "terra-defender": {
    title: "TerraDefender - Military IPB System",
    techStack: ["React", "Node.js", "Python", "ML"],
    description: "Provides strategic military insights through terrain analysis.",
    screenshots: ["/images/terra1.png", "/images/terra2.png"],
    details: [
      "Developed a Military Intelligence Preparation of the Battlefield (IPB) module to support strategic military planning.",
      "Implemented ML algorithms for terrain classification, building layout extraction, and feature identification.",
      "Enabled terrain and infrastructure mapping for better decision-making and situational awareness."
    ],
    
    github: ""
  },
  "elevator-predictor": {
    title: "Elevator Maintenance Predictor",
    techStack: ["Flask", "Python", "ML", "IoT"],
    description: "Predictive maintenance system using machine learning and sensor data.",
    screenshots: ["/images/elevator1.png", "/images/elevator2.png"],
    details: [
      "Developed an ML-powered predictive maintenance system using real-time sensor data and logs.",
      "Forecasted issues and sent early warnings to prevent breakdowns.",
      "Improved reliability and reduced downtime through proactive scheduling.",
      "Designed for residential, commercial, and industrial scalability."
    ],
    
    github: ""
  },
  
  "analyst-recommender": {
    title: "Analyst Recommendation System",
    techStack: ["Python", "Flask", "Pandas", "ML"],
    description: "AI-powered analyst-task matching for optimized allocation.",
    screenshots: ["/images/analyst1.png", "/images/analyst2.png"],
    details: [
      "Built AI system to assign analysts based on expertise, performance, and task context.",
      "Used multi-instance data and ML to enhance decision-making.",
      "Streamlined analyst-task alignment for improved outcomes.",
      "Scalable for integration into enterprise tools."
    ],
    
    github: ""
  },
  "trash-to-treasure": {
    title: "Trash to Treasure",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    description: "Eco platform to connect donors and buyers of reusable items.",
    screenshots: ["/images/trash1.png", "/images/trash2.png"],

    details: [
      "Created a MERN stack platform promoting sustainable living through reuse.",
      "Features pastel-themed UI, video background, and login dashboards.",
      "Users can list and acquire used clothes, e-waste, and more.",
      "Supports circular economy and environmental responsibility."
    ],
    
    github: ""
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="text-center p-5 text-light">Project Not Found</div>;

  return (
    <div className="project-detail-bg text-light py-5">
      <Container data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-gold mb-4">{project.title}</h2>

        <div className="mb-3">
          {project.techStack.map((tech, i) => (
            <Badge bg="warning" key={i} className="me-2 text-dark">{tech}</Badge>
          ))}
        </div>

<p className="lead">{project.description}</p>
<ul className="list-style-circle mb-4">
  {project.details.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>


        {/* <Carousel fade data-aos="zoom-in">
          {project.screenshots.map((src, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100 rounded shadow" src={src} alt={`Screenshot ${idx + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel> */}

        <Link to="/projects">
          <button className="btn btn-outline-warning">← Back to Projects</button>
        </Link>

      </Container>
    </div>
  );
};

export default ProjectDetail;
