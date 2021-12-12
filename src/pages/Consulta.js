import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Sonnet,
  Card,
  Accordion,
  Form,
  FormControl,
  Button,
  FloatingLabel
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Img1 from "../assets/home.jpg";
import "../css/Curso.css";
import "./SignUp";
import { auth } from "../firebase-config";
import { signOut } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import card2 from "../assets/dgames.mp4";
import card3 from "../assets/WEB_MOV.jpg";


const Consulta = () => {

  const [money, setMoney] = useState({});

  let money1 = 0;

  function checkFluency()
{
  var checkbox = document.getElementById('fluency');
  if (checkbox.checked != true)
  {
    money1 = 500;
  }
}

  function ConfirmDemo() {
    let hola = parseInt(money);
    alert(hola + money1);
    }

  return (
    <Container>
      <br />
      <br />
      <br />
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Contraseña
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Contraseña" />
              </Col>
            </Form.Group>
            <Form.Select aria-label="Default select example" onChange={(ev) => setMoney(ev.target.value)}>
            <option type="number" value={1000} selected>Desarrollo Web</option>
            <option value={500}>Desarrollo móvil</option>
          </Form.Select>
          <br/>
          <Form.Check id="fluency" type="checkbox" label="PWA" onClick={checkFluency}/>
          <Form.Check id="fluency2" type="checkbox" label="Soporte Avanzado" />
          <Form.Check id="fluency3" type="checkbox" label="Funcionalidad Ilimitada" />
          <br/>
          <Button onClick={ConfirmDemo}>
                Contratar desarrollo
              </Button>
         
          </Form>
        </Card.Body>
        
      </Card>
      <br />
      <br />
      <br />
    </Container>

  );
};

export default Consulta;