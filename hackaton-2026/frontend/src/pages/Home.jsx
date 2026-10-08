import { Link } from "react-router";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido</h1>
      <p>
        Organizá tus tareas de forma simple. Iniciá sesión o registrate para
        empezar a usar tu lista de tareas.
      </p>
      <p className="enlace-alterno">
        <Link to="/tasks">Ir a mis tareas</Link>
      </p>
    </div>
  );
};
