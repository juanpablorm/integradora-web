import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Form,
  FormControl,
  Button,
  FloatingLabel
} from "react-bootstrap";
import Img1 from "../assets/home.jpg";
import "../css/Curso.css";
import "./SignUp";
import { auth } from "../firebase-config";
import { signOut } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import card2 from "../assets/dgames.mp4";
import card3 from "../assets/WEB_MOV.jpg";

const Curso = () => {
  return (
    <Container fluid="lg">
      <div className="espacio"></div>

      <div className="fondo">
        <Row>
          <Col className="col-sm-12" xs={12}>
            <iframe src={card2} width="100%" height="600px"></iframe>
            <Card border="light">
              <h2 className="titulito2">Descripción General</h2>
              <Card.Body>
                <Card.Title>Introducción: Metodología Scrum</Card.Title>
                <Card.Text>
                  En este segmento introductorio analizaremos como se llevara a cabo el curso de manera general, se preparara
                  al usuario de este curso con las herramientas necesarias, y se responderan dudas respecto al contenido general
                  del curso
                </Card.Text>
              </Card.Body>
            </Card>
            <hr />
            <Card border="light">
              <h2 className="titulito2">Preguntas y Respuestas</h2>
              <Card.Body>
                <Card.Title>Encuentra tus preguntas</Card.Title>
                <Card.Text>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Pregunta"
                      className="me-2"
                      aria-label="Buscar"
                    />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
                  <br />
                  <Card>
                    <Card.Header>Juan Pablo RM</Card.Header>
                    <Card.Body>

                      <Card.Text>
                        ¿Es necesario ser un experto en el tema de Scrum para empezar en este curso?
                      </Card.Text>
                      <Card.Text>
                        Respuesta: Absolutamente no, este curso esta diseñado para que tdo el mundo
                        pueda tomarlo sin necesidad de tener conocimientos previos
                      </Card.Text>

                    </Card.Body>
                  </Card>
                  <br />
                  <FloatingLabel controlId="floatingTextarea2" label="Haz tu pregunta">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '80px' }}
                    />
                  </FloatingLabel>
                  <div className="espacio"></div>
                  <Button variant="primary" type="submit">
                    Subir
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <hr />
          <Col className="col-sm-12" xs={12}>
            <h2 className="titulito">Lecciones del Curso</h2>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Introducción</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="1. ¿De qué se trata el curso?" />
                  <p className="time">1 min.</p>
                  <Form.Check type="checkbox" label="2. Recursos del curso" />
                  <p className="time">2 min.</p>
                  <Form.Check type="checkbox" label="3. Preguntas frecuentes" />
                  <p className="time">6 min.</p>
                  <Form.Check type="checkbox" label="4. Antes de empezar" />
                  <p className="time">1 min.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Lección 1: Scrum Básico</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="5. ¿Qué es Scrum?" />
                  <p className="time">15 min.</p>
                  <Form.Check type="checkbox" label="6. Antecedentes de Scrum" />
                  <p className="time">20 min.</p>
                  <Form.Check type="checkbox" label="7. Conceptos básicos" />
                  <p className="time">8 min.</p>
                  <Form.Check type="checkbox" label="8. Repaso general" />
                  <p className="time">10 min.</p>
                  <Form.Check type="checkbox" label="9. Preguntas frecuentes" />
                  <p className="time">4 min.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Lección 2: Scrum Intermedio</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="10. Artefactos de Scrum" />
                  <p className="time">15 min.</p>
                  <Form.Check type="checkbox" label="11. Protocolos de Scrum" />
                  <p className="time">20 min.</p>
                  <Form.Check type="checkbox" label="12. Equipo de desarrollo de Scrum" />
                  <p className="time">8 min.</p>
                  <Form.Check type="checkbox" label="13. Propietario de producto Scrum" />
                  <p className="time">10 min.</p>
                  <Form.Check type="checkbox" label="14. Preguntas frecuentes" />
                  <p className="time">4 min.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Lección 3: Scrum Avanzado</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="15. Scrum y las Metodologías ágiles" />
                  <p className="time">15 min.</p>
                  <Form.Check type="checkbox" label="16. Aplicacion de Scrum en tus proyectos" />
                  <p className="time">20 min.</p>
                  <Form.Check type="checkbox" label="17. Elección de Metodología" />
                  <p className="time">8 min.</p>
                  <Form.Check type="checkbox" label="18. Repaso general" />
                  <p className="time">10 min.</p>
                  <Form.Check type="checkbox" label="19. Preguntas frecuentes" />
                  <p className="time">4 min.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Test Scrum</Accordion.Header>
                <Accordion.Body>
                  <Form.Check type="checkbox" label="20. Completa el test" />
                  <p className="time">60 min.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
      <div className="espacio"></div>
    </Container>

  );
};

export default Curso;