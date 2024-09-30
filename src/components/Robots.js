import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RobotDetail from "./RobotDetail";
import { FormattedMessage } from "react-intl";

function Robots() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); // Estado para el robot seleccionado

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

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot); // Actualiza el robot seleccionado
  };

  return (
    <div className="container">
      <h3>
        <FormattedMessage id="RobotListTitle" />
      </h3>
      <Row>
        {/* Columna izquierda con la tabla */}
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <FormattedMessage id="Name" />
                </th>
                <th>
                  <FormattedMessage id="Model" />
                </th>
                <th>
                  <FormattedMessage id="ManufacturerCompany" />
                </th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRobotClick(robot)} style={{ cursor: "pointer" }}>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        {/* Columna derecha con los detalles del robot */}
        <Col md={6}>
          {selectedRobot ? (
            <RobotDetail robot={selectedRobot} />
          ) : (
            <p>
              <FormattedMessage id="RobotSelectTitle" />
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Robots;
