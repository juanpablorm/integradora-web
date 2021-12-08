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
import "../css/Games.css";
import "./SignUp";
import { auth } from "../firebase-config";
import { signOut } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import carou1 from "../assets/carou4.jpg";
import carou2 from "../assets/carou8.jpg";
import carou3 from "../assets/game3.jpg";
import card1 from "../assets/game2.jpg";
import card2 from "../assets/dgames.mp4";
import card3 from "../assets/gg.jpg";

const Games = () => {
  return (
    <div className="body1">
      <Container>
        <br />
        <Card className="kk">
          <iframe src={card2} width="100%" height="400px"></iframe>
          <Card.Body>
            <CardGroup>
              <Card className="kk2">
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                  <Card.Title>Desarrolla en 2D</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="success" size="lg">
                  Empieza ahora
                </Button>
              </Card>
              <Card className="kk2">
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                  <Card.Title>Conoce más de Unity</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Button variant="success" size="lg">
                  Conoce más
                </Button>
              </Card>
              <Card className="kk2">
                <Card.Img variant="top" src={carou3} />
                <Card.Body>
                  <Card.Title>Desarrolla en 3D</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Button variant="success" size="lg">
                  Empieza ahora
                </Button>
              </Card>
            </CardGroup>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
};

export default Games;
