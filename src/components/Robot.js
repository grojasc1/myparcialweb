import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Robot({ robot }) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={robot.foto}
        alt={robot.descripcion}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/robots/${robot.id}`}>{robot.nombre}</Link>
        </Card.Title>
        <Card.Text>{robot.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Robot;
