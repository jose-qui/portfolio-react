import React from "react";
import fotoPerfil from "../assets/imagenjq2.jpg";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#estudios">Estudios</a></li>
          <li><a href="#softskills">Soft Skills</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#idiomas">Idiomas</a></li>
        </ul>
      </nav>

      <header className="header">
        <img src={fotoPerfil} alt="Jose Quiroga" className="profile-pic" />
        <h1>Jose María Quiroga</h1>
        <h4>Estudiante de Programación (61033)</h4>
        <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "0 20px" }}>
  Hola, soy Jose Maria Quiroga, estudiante de Programación en la UTN-FRT, tengo 21 años, soy un apasionado por la tecnología y el desarrollo de software. Me gusta combinar mi interés por la computación con mi pasión por el fútbol y la música. Tengo conocimientos en C#, Java, HTML, CSS y Base de datos.
</p>
      </header>
    </>
  );
}

export default Header;
