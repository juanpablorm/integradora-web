import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormControl,
  Card,
  CardGroup,
} from "react-bootstrap";
import Img1 from "../assets/test.jpg";
import Img2 from "../assets/icon_384.png";
import "../css/SignIn.css";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { googleProvider } from "../GoogleSigInConf/authMethod";
import socialMediaAuth from "../GoogleSigInConf/Auth";
import swal from "sweetalert";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, collection, addDoc } from "@firebase/firestore";
import { auth, db } from "../firebase-config";

const SignIn = () => {
  let navigate = useNavigate();
  const redirect = () => {
    return navigate("/home", { replace: true });
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    await swal({
      title: "¡Bienvenido(a)!",
      text: "Inicio de sesión correcto",
      icon: "success",
      button: "Vale!",
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser) {
      navigate("/home", { replace: true });
    }
  });

  const handleOnClick = (provider) => {
    socialMediaAuth(provider)
      .then(() => {
        return addDoc(collection(db, "users"), {
          Nombre: auth.name,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <Container>
        <CardGroup className="caca">
          <Card border="dark conte1">
            <Card.Img variant="top" src={Img2} />
          </Card>
          <Card border="dark">
            <Card.Body className="conte">
              <Card.Title>Inicio de Sesión</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                </Form.Group>
                {!user && (
                  <div>
                    <Button variant="primary" onClick={login}>
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleOnClick(googleProvider)}
                    >
                      Google
                    </Button>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default SignIn;

