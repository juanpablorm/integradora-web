import { useState } from "react";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import "../css/Dev.css";
import Dev1 from "../assets/Dev1.jpg";
import Dev2 from "../assets/Dev2.jpg";
import android from "../assets/Dev7.png";
import ios from "../assets/Dev8.png";
import html from "../assets/Dev5.png";
import css from "../assets/Dev6.png";
import js from "../assets/Dev9.png";
import react from "../assets/Dev4.png";
import androids from "../assets/Dev10.png";
import vs from "../assets/Dev11.png";
import fire from "../assets/Dev12.png";
import Swal from "sweetalert2";

const Dev = () => {
  function alertHTML() {
    Swal.fire({
      title: "<strong>HTML 5</strong>",
      icon: "info",
      html:
        "HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web." +
        ' Visita: <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">MDN Web Docs</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertCSS() {
    Swal.fire({
      title: "<strong>CSS 3</strong>",
      icon: "info",
      html:
        "CSS (en inglés Cascading Style Sheets) es lo que se denomina lenguaje de hojas de estilo en cascada y se usa para estilizar elementos escritos en un lenguaje de marcado como HTML. CSS separa el contenido de la representación visual del sitio." +
        ' Visita: <a href="https://www.hostinger.mx/tutoriales/que-es-css" target="_blank">Hostinger</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertJS() {
    Swal.fire({
      title: "<strong>JavaScript</strong>",
      icon: "info",
      html:
        "JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, puedes apostar que probablemente JavaScript está involucrado" +
        ' Visita: <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank">MDN Web Docs</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertReact() {
    Swal.fire({
      title: "<strong>React JS</strong>",
      icon: "info",
      html:
        "Es una librería open source de JavaScript para desarrollar interfaces de usuario. Fue lanzada en el año 2013 y desarrollada por Facebook, quienes también la mantienen actualmente junto a una comunidad de desarrolladores independientes y compañías." +
        ' Visita: <a href="https://tech.tribalyte.eu/blog-que-es-react" target="_blank">TRIBALYTE</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertAS() {
    Swal.fire({
      title: "<strong>Android Studio</strong>",
      icon: "info",
      html:
        "Android Studio es el entorno de desarrollo integrado (IDE) oficial para el desarrollo de apps para Android" +
        ' Visita: <a href="https://developer.android.com/studio/intro?hl=es-419" target="_blank">ANDROID STUDIO</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertVS() {
    Swal.fire({
      title: "<strong>Visual Studio Code</strong>",
      icon: "info",
      html:
        "Visual Studio Code es nuestro editor ded código fuente por excelencia, desarrollado por Microsoft para Windows, Mac, Linux y Web." +
        ' Visita: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
  function alertFire() {
    Swal.fire({
      title: "<strong>Firebase</strong>",
      icon: "info",
      html:
        "Firebase de Google es una plataforma en la nube para el desarrollo de aplicaciones web y móvil. Está disponible para distintas plataformas (iOS, Android y web), con lo que es más rápido trabajar en el desarrollo." +
        ' Visita: <a href="https://www.digital55.com/desarrollo-tecnologia/que-es-firebase-funcionalidades-ventajas-conclusiones/" target="_blank">DIGITAL 55</a> para más información',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, Genial!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }

  return (
    <div className="body">
      <Container>
        <CardGroup className="DevCG">
          <Card className="DevC">
            <Card.Img variant="top" src={Dev1} style={{ opacity: 0.8 }} />
            <Card.Body>
              <Card.Title className="DevCT">Web Development</Card.Title>
              <br />
              <Card.Text>
                Ofrecemos desarrollo de aplicaciones web para:
                <br />
                <br />
                <ul>
                  <li>Gestión de usuarios</li>
                  <li>Gestión de tareas</li>
                  <li>Mensajería</li>
                  <li>Administración de inventario</li>
                  <li>E-Commerce</li>
                  <li>Entre otras</li>
                </ul>
                Siempre priorizando la satisfacción de nuestros clientes y
                asesorándolos en aspectos como la contratación de servicios de
                hosting y utilizando las tecnologías más recientes para evitar
                la obsolescencia a corto plazo.
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="DevC">
            <Card.Img variant="top" src={Dev2} style={{ opacity: 0.8 }} />
            <Card.Body>
              <Card.Title className="DevCT">Mobile Development</Card.Title>
              <br />
              <Card.Text>
                En el aspecto del desarrollo móvil, nuestros expertos se
                encargan de desarrollar aplicaciones con un rendimiento
                increíble y visualmente llamativas para favorecer la experiencia
                de usuario todo en pro de que los usuarios se lleven la mejor
                impresión desde el primer instante.
                <br />
                <br />
                <br />
                <div className="DevOS">
                  <img src={android} style={{ width: 150, height: 100 }} />
                  <img src={ios} style={{ width: 100, height: 100 }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Container>
          <Card className="DevC">
            <Card.Body>
              <Card.Title className="DevCT2">
                Conoce un poco de las tecnologías que implementamos:
              </Card.Title>
              <Card.Text>
                <div className="DevDesc1">
                  <Button className="Devbtn" onClick={alertHTML}>
                    <img src={html} style={{ height: 80, width: 80 }} />
                  </Button>
                  <Button className="Devbtn" onClick={alertCSS}>
                    <img src={css} style={{ height: 80, width: 160 }} />
                  </Button>
                  <Button className="Devbtn" onClick={alertJS}>
                    <img src={js} style={{ height: 80, width: 80 }} />
                  </Button>
                  <Button className="Devbtn" onClick={alertReact}>
                    <img
                      src={react}
                      style={{ height: 80, width: 80, marginLeft: 22 }}
                    />
                  </Button>
                  <Button className="Devbtn" onClick={alertAS}>
                    <img
                      src={androids}
                      style={{ height: 80, width: 80, marginLeft: 25 }}
                    />
                  </Button>
                  <Button className="Devbtn" onClick={alertVS}>
                    <img
                      src={vs}
                      style={{ height: 80, width: 160, marginLeft: 0 }}
                    />
                  </Button>
                  <Button className="Devbtn" onClick={alertFire}>
                    <img
                      src={fire}
                      style={{ height: 100, width: 260, marginLeft: 0 }}
                    />
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Dev;
