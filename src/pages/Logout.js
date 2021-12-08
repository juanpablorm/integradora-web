import { auth } from "../firebase-config";
import { signOut } from "@firebase/auth";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import gif from "../assets/bye.gif";
import { Button } from "react-bootstrap";
import "../css/logout.css";

export default function Logout() {
  const navigate = useNavigate();

  const redirect = () => {
    return navigate("/", { replace: true });
  };
  const redirect2 = () => {
    return navigate("/", { replace: true });
  };

  signOut(auth);
  swal({
    title: "¡Nos vemos luego!",
    text: "Cerraste sesión con éxito",
    icon: "success",
    button: "Adios!",
    closeOnClickOutside: false,
    closeOnEsc: false,
  });

  return (
    <>
      <div className="divlogout">
        <img src={gif} alt="caquita" />
        <br />
        <Button variant="success" onClick={redirect2} className="btnlogout">
          Volver a iniciar sesión
        </Button>
      </div>
    </>
  );
}
