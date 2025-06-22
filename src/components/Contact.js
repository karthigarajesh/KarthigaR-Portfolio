// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Button, Card, Collapse } from 'react-bootstrap';

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="bg-dark text-light py-5">
      <Container>
        <h2 className="text-center text-gold mb-4">Contact Me</h2>
        <div className="text-center">
          <Button
            variant="warning"
            onClick={() => setOpen(!open)}
            aria-controls="contact-collapse"
            aria-expanded={open}
          >
            {open ? 'Hide Contact Info' : 'Show Contact Info'}
          </Button>
        </div>

        <Collapse in={open}>
          <div id="contact-collapse" className="mt-4 d-flex justify-content-center">
            <Card bg="black" text="light" border="warning" style={{ width: '22rem' }} className="text-center shadow">
              <Card.Body>
                <Card.Title className="text-warning">📞 Contact Details</Card.Title>
                <Card.Text>
                  <strong>Phone:</strong> +91 93448 20905 <br />
                  <strong>Email:</strong> karthigarajesh2004@example.com <br />
                  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karthiga-rajesh-2a2897257" className="text-warning" target="_blank" rel="noreferrer">karthiga-rajesh</a><br />
                  <strong>Instagram:</strong> <a href="https://www.instagram.com/karthigarajesh_154?utm_source=qr&igsh=MXNyN3YzZnBtYTEzdQ== " className="text-warning" target="_blank" rel="noreferrer">@your_insta</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </Container>
    </section>
  );
};

export default Contact;
