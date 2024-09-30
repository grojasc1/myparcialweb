import React from "react";
import { Card } from "react-bootstrap";

const RobotDetail = ({ robot }) => {
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
