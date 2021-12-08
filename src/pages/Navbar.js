import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "../css/Navbar.css";
import icon from "../assets/icon_128.png";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Navbar1 = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Navbar className="Navbar" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Devancesoft
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!user && (
                <>
                  <Nav.Link href="/">Inicio de Sesión</Nav.Link>
                  <Nav.Link href="/signup">Registro</Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link href="/home">Inicio</Nav.Link>
                  <Nav.Link href="/logout">Cerrar sesión</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
