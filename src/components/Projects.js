// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaRecycle } from 'react-icons/fa';


const techIcons = {
  React: <FaReact className="text-warning fs-4 me-2" title="React" />,
  "Node.js": <FaNodeJs className="text-warning fs-4 me-2" title="Node.js" />,
  Python: <FaPython className="text-warning fs-4 me-2" title="Python" />,
  Java: <FaJava className="text-warning fs-4 me-2" title="Java" />,
  MySQL: <FaDatabase className="text-warning fs-4 me-2" title="MySQL" />,
  MongoDB: <FaDatabase className="text-warning fs-4 me-2" title="MongoDB" />,
  "Trash": <FaRecycle className="text-warning fs-4 me-2" title="Recycle" />,
};

const projects = [
  {
    id: "terra-defender",
    title: "TerraDefender - Military IPB",
    techStack: ["React", "Node.js", "Python"],
  },
  {
    id: "elevator-predictor",
    title: "Elevator Maintenance Predictor",
    techStack: ["Python"],
  },
  // {
  //   id: "voting-system",
  //   title: "Online Voting System",
  //   techStack: ["Java", "MySQL"],
  // },
  {
    id: "analyst-recommender",
    title: "Analyst Recommendation System",
    techStack: ["Python", "Flask"],
  },
  {
    id: "trash-to-treasure",
    title: "Trash to Treasure",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#080808' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5 text-warning">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Link to={`/project/${project.id}`} className="text-decoration-none">
                <Card className="project-card h-100 p-3 border-0">
                  <Card.Body>
                    <Card.Title className="fw-bold mb-3 d-flex align-items-center gap-2">
                      {project.title}
                    </Card.Title>
                    <div className="d-flex flex-wrap align-items-center">
                      {project.techStack.map((tech, idx) => (
                        <div key={idx}>{techIcons[tech] || <span>{tech}</span>}</div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
