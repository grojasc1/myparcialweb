import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Robot({ robot }) {
  return (
    <Card style={{ width: "18rem", height: "28rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={robot.imagen}
        alt={robot.humor}  
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/robots/${robot.id}`}>
            {robot.nombre}
          </Link>
        </Card.Title>
        <Card.Text>
          <b>Modelo:</b> {robot.modelo} <br />
          <b>Empresa:</b> {robot.empresaFabricante} <br />
          <b>Año:</b> {robot.añoFabricacion} <br />
          <b>Procesador:</b> {robot.capacidadProcesamiento} <br />
          <b>Humor:</b> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
