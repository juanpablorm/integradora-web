import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Carousel,
  Card,
  CardGroup,
} from "react-bootstrap";
import Img1 from "../assets/home.jpg";
import "../css/HomeScreen.css";
import "./SignUp";
import { auth } from "../firebase-config";
import { signOut } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import carou1 from "../assets/carou4.jpg";
import carou2 from "../assets/carou8.jpg";
import carou3 from "../assets/carou9.jpg";
import card1 from "../assets/DevCard.png";
import card2 from "../assets/game1.jpg";
import card3 from "../assets/WEB_MOV.jpg";

const HomeScreen = () => {
  return (
    <>
      <Container fluid="lg">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={carou1} alt="First slide" />
            <Carousel.Caption>
              <h3>El mejor equipo para el desarrollo de tus proyectos!</h3>
              <p>
                Nuestro equipo de trabajo esta compuesto por gente agil y
                trabajadora.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={carou2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Tecnologia de punta</h3>
              <p>
                Contamos con tecnologia de punta para ofrecerte el mejor
                servicio.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carou3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Ponte en contacto!</h3>
              <p>
                Acercate con nuestros asesores para conseguir una cotizacion sin
                comporomisa
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="espacio"></div>
        <h1 className="flexbox">Bienvenido a DevanceSoft</h1>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body className="CardBody">
              <Card.Title>Desarrollo Web/Móvil</Card.Title>
              <Card.Text>
                Ofrecemos cotización, asesoría y desarrollo de aplicaciones Web
                con diseño responsivo y Móviles con una amplia gama de
                funcionalidades!
              </Card.Text>
              <Button href="/dev" className="CardButton">
                Conoce más
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body className="CardBody">
              <Card.Title>Creación de Videojuegos</Card.Title>
              <Card.Text>
                Desarrollo de videojuegos de plataformas en 2D o en 3D con
                increíbles efectos y jugabilidad destinados para todo tipo de
                proyectos!
              </Card.Text>
              <Button href="/games" className="CardButton">
                Conoce más
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body className="CardBody">
              <Card.Title>Curso de Metodología ágil</Card.Title>
              <Card.Text>
                Capacitación para sus empleados con los más expertos en la
                materia! Atrevete a descubrir una de las mejores formas de
                trabajo...
              </Card.Text>
              <Button href="/curso" className="CardButton">
                Conoce más
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default HomeScreen;
