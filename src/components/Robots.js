import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Robot from "./Robot";

function Robots() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3001/robots"; // Ruta del backend que devuelve la lista de robots
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
      })
      .catch((error) => {
        console.error("Error fetching robots:", error);
      });
  }, []);

  return (
    <div className="container">
      <h3>Listado de Robots</h3>
      <hr />
      <Row>
        {robots.map((robot) => (
          <Col key={robot.id} md={4}>
            <Robot robot={robot} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Robots;
