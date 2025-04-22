import React from "react";
import "../styles/App.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/tu-foto.jpg" alt="Jose Quiroga" className="profile-pic" />
      <h1>Jose María Quiroga</h1>
      <h4>Estudiante de Programación (61033)</h4>
    </header>
  );
};

export default Header;
