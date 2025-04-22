import React from "react";
import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";

const Main = () => {
  return (
    <main className="main">
      <section className="presentacion">
        <p>
          Soy Jose María Quiroga, estudiante de Programación en la Facultad
          Regional Tucumán. Tengo 21 años soy un apasionado por la tecnología y el desarrollo de sowftware. Me gusta combinar mi interés por la computación con mi pasión por el futbol, la música y el entrenamiento físico. Tengo conocimientos en C#, Java, HTML, CSS y Base de datos. Cuando termine la carrera me gustaría enfocarme en el desarrollo de web y frontend.
        </p>
      </section>

      <section id="estudios">
        <h2>Estudios</h2>
        <Estudios />
      </section>

      <section id="softskills">
        <h2>Soft Skills</h2>
        <SoftSkills />
      </section>

      {/* Podés agregar secciones vacías para completar después */}
      <section>
        <h2>Proyectos Realizados</h2>
        <p>Próximamente...</p>
      </section>

      <section>
        <h2>Experiencia Laboral</h2>
        <p>Próximamente...</p>
      </section>

      <section>
        <h2>Idiomas</h2>
        <p>Español Nativo</p>
        <p>Ingles Intermedio</p>
      </section>
    </main>
  );
};

export default Main;
