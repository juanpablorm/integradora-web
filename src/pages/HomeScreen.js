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
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import carou1 from "../assets/carou4.jpg";
import carou2 from "../assets/carou8.jpg";
import carou3 from "../assets/carou9.jpg";
import card1 from "../assets/DevCard.png";
import card2 from "../assets/game1.jpg";
import card3 from "../assets/WEB_MOV.jpg";
import { doc, getDoc } from "@firebase/firestore";
import { auth, db } from "../firebase-config";

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
        <h1 className="flexbox">Bienvenido a DevanceSoft </h1>

        <CardGroup>
          <Card className="noborder">
            <Card.Img variant="top" src={card1} className="noborder"/>
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
          <Card className="noborder">
            <Card.Img variant="top" src={card2} className="noborder"/>
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
          <Card className="noborder">
            <Card.Img variant="top" src={card3} className="noborder"/>
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
        <div className="espacio"></div>
        <Card className="noborder">
          <Card.Body>
            <h1 className="flexbox1">Conoce más sobre nuestros planes</h1>
            <CardGroup>
              <Card border="light">
                <Card.Body>
                  <Card.Title id="plan1">Desarrollo Web</Card.Title>
                  <Card.Text>
                    <ul>

                      <li type="disc">1 Proyecto</li>
                      <li type="disc">Diseño responsivo</li>
                      <li type="disc">Con o sin limites de funcionalidad</li>
                      <li type="disc">Soporte básico o avanzado</li>

                    </ul>
                    <Card.Title>Desde los $1000 USD</Card.Title>
                  </Card.Text>
                </Card.Body>
                <Button href="/consulta" variant="danger">
                Consultar
              </Button>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title id="plan2">Desarrollo Móvil</Card.Title>
                  <Card.Text>
                    <ul>

                      <li type="disc">1 Proyecto</li>
                      <li type="disc">Rendimiento nativo Android/IOS</li>
                      <li type="disc">Con o sin limites de funcionalidad</li>
                      <li type="disc">Soporte básico o avanzado</li>

                    </ul>
                  </Card.Text>
                  <Card.Title>Desde los $500 USD</Card.Title>
                </Card.Body>
                <Button href="/consulta" variant="warning">
                Consultar
              </Button>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title id="plan3">Curso de Videojuegos</Card.Title>
                  <Card.Text>
                    <ul>

                      <li type="disc">Diseño 2D y 3D</li>
                      <li type="disc">Uso de Blender</li>
                      <li type="disc">Uso de Unity</li>
                      <li type="disc">Creación de Scripts Avanzados</li>

                    </ul>
                  </Card.Text>
                  <Card.Title>Costo $100 USD</Card.Title>
                </Card.Body>
                <Button href="/games" variant="primary">
                Iniciar
              </Button>
              </Card>
              <Card border="light">
                <Card.Body>
                  <Card.Title id="plan4">Curso de Metodologías</Card.Title>
                  <Card.Text>
                    <ul>

                      <li type="disc">SCRUM nivel básico a experto</li>
                      <li type="disc">Capacitación</li>
                      <li type="disc">Contacto con nuestros expertos</li>

                    </ul>
                  </Card.Text>
                  <Card.Title>Costo $100 USD</Card.Title>
                </Card.Body>
                <Button href="/curso" variant="success">
                Iniciar
              </Button>
              </Card>
            </CardGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default HomeScreen;
