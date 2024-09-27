import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Robot(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.robot.foto}
       alt={props.robot.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/robots/" + props.robot.id}>
           {props.robot.nombre}
         </Link>
       </Card.Title>
       <Card.Text>{props.robot.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Robot;