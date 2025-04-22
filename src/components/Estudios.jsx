import React from "react";

const estudios = [
  { institucion: "Instituto San Pablo Apóstol", carrera: "Bachiller con posgrado en Economía y Administración", año: "2021" },
  { institucion: "UTN FRT", carrera: "Tecnicatura en Programación", año: "2024 - cursando" },
  { institucion: "Instituto ETON", carrera: "Curso de Ingles A2-B1", año: "2023" }
];

const Estudios = () => {
  return (
    <ul>
      {estudios.map((item, index) => (
        <li key={index}>
          <strong>{item.carrera}</strong> - {item.institucion} ({item.año})
        </li>
      ))}
    </ul>
  );
};

export default Estudios;
