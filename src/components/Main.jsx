import React from "react";
import Estudios from "./Estudios";
import SoftSkills from "./SoftSkills";

const Main = () => {
  return (
    <main className="main-content">
      <section id="estudios" className="section">
        <h2>Estudios</h2>
        <Estudios />
      </section>

      <section id="softskills" className="section alt">
        <h2>Soft Skills</h2>
        <SoftSkills />
      </section>

      <section id="proyectos" className="section">
        <h2>Proyectos Realizados</h2>
        <p>Potfolio React: Mi portfolio personal realizado con React</p>
        <p>Pagina Web: Pagina web de un cine como tfi</p>
        <p>Pagina Web: Realizado con HTML y CSS para una tienda de ropa</p>
      </section>

      <section id="experiencia" className="section alt">
        <h2>Experiencia Laboral</h2>
        <p>Embalajes Brito S.A (2021) - </p>
        <p>Teleperformance (2022-2023) - </p>
      </section>

      <section id="idiomas" className="section">
        <h2>Idiomas</h2>
        <p>Español Nativo</p>
        <p>Inglés Intermedio</p>
      </section>

    </main>
  );
};

export default Main;
