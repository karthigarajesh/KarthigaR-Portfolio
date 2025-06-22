// src/components/Hero.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: '70vh',
        background: 'linear-gradient(to right, #000000, #1a1a1a)',
        color: 'gold',
        borderBottom: '2px solid #FFD700'
      }}
    >
      <Container>
        <Row className="align-items-center" data-aos="fade-up" data-aos-duration="1000">
          {/* Text Content */}
          <Col md={6} className="text-md-start text-center">
            <h1
              data-aos="fade-down"
              data-aos-delay="400"
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
              }}
            >
              Hi, I'm Karthiga 👋
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                fontSize: '1.4rem',
                fontWeight: '400',
                color: '#f9f9f9',
              }}
            >
              I'm a passionate <strong>Full-Stack Developer</strong> focused on building clean,
              responsive, and efficient web applications using the <strong>MERN stack</strong>.
            </p>
            {/* <Button
              href="#projects"
              variant="warning"
              size="lg"
              className="me-3 text-dark fw-semibold"
              style={{ fontSize: '1.1rem' }}
            >
              View My Projects
            </Button> */}
            <Button
              href="/KarthigaR-Portfolio/KarthigaRajesh-CV.pdf"
              variant="outline-warning"
              size="lg"
              download
              className="fw-semibold"
              style={{ fontSize: '1.1rem' }}
            >
              Download Resume
            </Button>

          </Col>

          {/* Image & Icons */}
          <Col md={6} className="text-center mt-4 mt-md-0" data-aos="fade-left" data-aos-duration="1000">
            <img
              src={process.env.PUBLIC_URL + "/developer.jpg"}
              alt="Karthiga"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                maxWidth: '300px',
                height: 'auto',
                border: '5px solid #FFD700',
              }}
            />
            <p className="mt-3" style={{ color: '#ccc', fontSize: '1.3rem', fontWeight: '500' }}>
              Full Stack Developer
            </p>
            <div className="d-flex justify-content-center gap-4 mt-2" style={{ fontSize: '2rem' }}>
              <a
                href="https://www.linkedin.com/in/karthiga-rajesh-2a2897257"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Karthiga-220701119"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/karthigarajesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Hero;
