import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Carousel,
  Card,
  CardGroup,
  Accordion
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
      <h1 className="flexbox">Bienvenido a DevanceSoft</h1>
      <div className="fondo">
        <Row>
          <Col xs={8}>
            <Card border="light">
              <iframe src={card2} width="100%" height="400px"></iframe>
              <Card.Body>
                <Card.Title>Introducción: Metodología Scrum</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Accordion className="borde">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Lección Introductoria</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Lección 1: Scrum Básico</Accordion.Header>
                <Accordion.Body>

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