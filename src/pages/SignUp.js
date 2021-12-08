import { useState } from "react";
import { Container, Button, Card, CardGroup, Form } from "react-bootstrap";
import Img1 from "../assets/Signup.jpg";
import "../css/SignIn.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setDoc, collection, addDoc } from "@firebase/firestore";

const SignUp = () => {
  // Usuario actual
  //const auth = getAuth();

  /*onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const userId = user.uid;
      const email = user.email;
      const docRef = doc(db, "users", userId);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  */

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser) {
      navigate("/home", { replace: true });
    }
  });

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return addDoc(collection(db, "users"), {
          Nombre: nombre,
          Email: email,
          Pass: password,
        });
      })
      .catch((error) => alert(error.message));
    swal({
      title: "¡Bienvenido(a)!",
      text: "Inicio de sesión correcto",
      icon: "success",
      button: "Vale!",
      closeOnClickOutside: false,
      closeOnEsc: false,
    });
  };

  return (
    <>
      <Container>
        <CardGroup className="caca">
          <Card border="dark">
            <Card.Img variant="top" src={Img1} />
          </Card>
          <Card border="dark">
            <Card.Body className="conte">
              <Card.Title>Registro</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(event) => {
                      setNombre(event.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </Form.Group>
                {!user && (
                  <div>
                    <Button variant="primary" onClick={register}>
                      Registrarse
                    </Button>
                  </div>
                )}
              </Form>
              <div> {user?.email} </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default SignUp;