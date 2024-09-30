import React from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const RobotDetail = ({ robot }) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src={robot.imagen} alt={robot.nombre} />
      <Card.Body>
        <Card.Title>{robot.nombre}</Card.Title>
        <Card.Text>
          <b>
            <FormattedMessage id="Model"/>:</b> {robot.modelo}
        </Card.Text>
        <Card.Text>
          <b>
            <FormattedMessage id="ManufacturerCompany"/>:</b> {robot.empresaFabricante}
        </Card.Text>
        <Card.Text>
          <b>
            <FormattedMessage id="FabricationYear"/>:</b> {robot.añoFabricacion}
        </Card.Text>
        <Card.Text>
          <b>
            <FormattedMessage id="Processing"/>:</b> {robot.capacidadProcesamiento}
        </Card.Text>
        <Card.Text>
          <b><FormattedMessage id="Description"/>:</b> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;
