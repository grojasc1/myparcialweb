import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const RobotDetail = () => {
  const { robotId } = useParams(); // Obtener el ID del robot desde la URL
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    // Hacer una solicitud al backend para obtener el robot por ID
    const fetchRobot = async () => {
      const response = await fetch(`http://localhost:3001/robots/${robotId}`);
      const data = await response.json();
      setRobot(data);
    };

    fetchRobot();
  }, [robotId]);

  if (!robot) {
    return <p>Cargando detalles del robot...</p>;
  }

  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src={robot.imagen} alt={robot.nombre} />
      <Card.Body>
        <Card.Title>{robot.nombre}</Card.Title>
        <Card.Text>
          <b>Modelo:</b> {robot.modelo}
        </Card.Text>
        <Card.Text>
          <b>Empresa Fabricante:</b> {robot.empresaFabricante}
        </Card.Text>
        <Card.Text>
          <b>Año de Fabricación:</b> {robot.añoFabricacion}
        </Card.Text>
        <Card.Text>
          <b>Capacidad de Procesamiento:</b> {robot.capacidadProcesamiento}
        </Card.Text>
        <Card.Text>
          <b>Descripción:</b> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;