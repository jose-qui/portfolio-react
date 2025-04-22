import React from "react";

const habilidades = ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Aprendizaje autónomo"];

const SoftSkills = () => {
  return (
    <ul>
      {habilidades.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SoftSkills;
