import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const certificates = [
  {
    title: 'AI Infrastructure and Operations Fundamentals',
    date: 'April 2025',
    platform: 'NVIDIA',
    skills: ['AI/ML System Infrastructure', 'GPU Acceleration', 'MLOps Basics', 'AI Deployment & Scaling','Model Lifecycle Management'],
    credential: 'https://drive.google.com/file/d/1D_ViUU53TCd0XcxRKQ7au-yR8crEWjl3/view?usp=drive_link'
  },
  {
    title: 'Building Modern Web Applications with MERN Stack',
    date: 'Feb 2025',
    platform: 'EY + AICTE',
    skills: ['MongoDB, Express.js, React.js, Node.js', 'REST API Development', 'Frontend & Backend Integration', 'Web Hosting & Deployment'],
    credential: 'https://drive.google.com/file/d/1tMTuOg7dhF5dpjHnqKwvdErT_9ahpGpc/view?usp=drive_link'
  },
  {
    title: 'Recommendation Systems on Google Cloud ',
    date: 'Jan 2025',
    platform: 'Google Cloud ',
    skills: ['Machine Learning', 'Recommendation Algorithms (Collaborative Filtering, Content-Based)', 'Google Cloud Platform (GCP)', 'AI/ML Pipelines'],
    credential: 'https://drive.google.com/file/d/1JjamNXrjDPCyFNGhO7nzvThZHvarwnpG/view?usp=drive_link'
  },
  {
    title: 'Android App Development',
    date: 'May 2024',
    platform: 'InternEzy',
    skills: ['Mobile UI Design', 'Java/Kotlin ', 'Debugging and Testing'],
    credential: 'https://drive.google.com/file/d/1dj3OpbXqnbXBsBRbI_NT-A6qyxWgbfQf/view?usp=drive_link'
  },
  {
    title: 'Advanced Machine Learning Using Python',
    date: 'April 2024',
    platform: 'InternEzy',
    skills: ['Python for Data Science', 'Model Evaluation & Optimization ', 'Scikit-learn, NumPy, Pandas'],
    credential: 'https://drive.google.com/file/d/1saHF5dknfQHGuGuOz3b8YXlIqNu1qSNV/view?usp=drive_link'
  },
  {
    title: 'Android App Development',
    date: 'Jan 2024',
    platform: 'CodSoft',
    skills: ['Java & Kotlin', 'Android Studio', 'API Handling in Android'],
    credential: 'https://drive.google.com/file/d/1KoRal9BDxeSqmw0QcW-fgN2zz8EAP_2Z/view?usp=drive_link'
  },
  {
    title: 'FullStack Web Development',
    date: 'June 2023',
    platform: 'InternEzy',
    skills: ['HTML5, CSS3, JavaScript', 'React.js', 'Node.js'],
    credential: 'https://drive.google.com/file/d/1TmrhxvnUohl6p4JwoIRz50s4T1yJSV1_/view?usp=drive_link'
  }
];

const Certificates = () => {
  return (
    <section style={{ background: '#000', color: '#FFD700', minHeight: '100vh', padding: '50px 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">My Certificates</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {certificates.map((cert, idx) => (
            <Col key={idx}>
              <Card className="h-100 bg-dark text-light border-gold shadow-sm p-3 hover-shadow" style={{ border: '1px solid #FFD700' }}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="fw-bold" style={{ color: '#FFD700' }}>{cert.title}</Card.Title>
                    <small style={{ color: '#aaa' }}>{cert.date}</small>
                  </div>
                  <p className="mb-2"><strong>Platform:</strong> {cert.platform}</p>
                  <p className="mb-2"><strong>Skills:</strong> {cert.skills.join(', ')}</p>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
