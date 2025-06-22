// src/components/Navbar.js
import React, { useState } from 'react';
import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar
        bg="black"
        variant="dark"
        expand="lg"
        sticky="top"
        className="shadow-sm py-3"
        style={{ borderBottom: '2px solid #FFD700' }}
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4 text-warning">
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar" />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="mx-2 text-light hover-gold">
                Home
              </Nav.Link>
              {/* <Nav.Link href="/projects" className="mx-2 text-light hover-gold">
                Projects
              </Nav.Link> */}
              <Nav.Link as={Link} to="/projects" className="mx-2 text-light hover-gold">Projects</Nav.Link>
              <Nav.Link as={Link} to="/certificates" className="mx-2 text-light hover-gold">Certificates</Nav.Link> {/* ✅ NEW */}
              <Nav.Link onClick={() => setShowModal(true)} className="mx-2 text-light hover-gold" style={{ cursor: 'pointer' }}>
                Contact
              </Nav.Link>
              {/* <Nav.Link href="/login" className="mx-2 text-warning fw-semibold">
                Admin
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Contact Info */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        className="text-dark"
      >
        <Modal.Header closeButton className="bg-dark text-warning">
          <Modal.Title>📞 Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light fs-9">
          <p><FaPhone className="me-2 text-warning" /> <strong>Phone:</strong> +91 93448 29095</p>
          <p><FaEnvelope className="me-2 text-warning" /> <strong>Email:</strong> karthigarajesh2004@gmail.com</p>
          <p><FaLinkedin className="me-2 text-warning" /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthiga-rajesh" target="_blank" rel="noreferrer" className="text-info">LinkedIn Profile</a></p>
          <p><FaInstagram className="me-2 text-warning" /> <strong>Instagram:</strong> <a href="https://instagram.com/your_insta" target="_blank" rel="noreferrer" className="text-info">Instagram id</a></p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="outline-warning" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyNavbar;
