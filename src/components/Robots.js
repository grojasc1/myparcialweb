import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

function Robot() {
 const [robot, setRobot] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/Robot.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setRobot(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de Robot</h2>
     <hr></hr>
     <Row>
       {robots.map((robot) => (
         <Col key={robot.id}>
           <robot robot={robot} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Robot;