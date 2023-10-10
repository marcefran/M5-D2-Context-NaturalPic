import { Link } from "react-router-dom";
import "./Header.css"

import { IconCamera } from "@tabler/icons-react";
export const Header = () => {
  return (
    <>
      <header>
        <h1>Fotografías de<span>Naturaleza</span></h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/Favoritos">Favoritos</Link>
      </nav>
      </header>
    </>
  );
};
