import {React, useState} from "react";
import { Form, Button } from "react-bootstrap";

const SignInForm = () => {
    /* const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); */

    const [formValues, setFormValues] = useState({ username: "", password: ""});


    return (
        <div>
          <h3>Inicio de sesión</h3>
         
          <Form>
          <Form.Group className="mb-6" controlId="formBasicUsername">
            <Form.Label><b>Nombre de usuario</b></Form.Label>
            <Form.Control type="text" placeholder=""/>
            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
          </Form.Group>
     
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Contraseña</b></Form.Label>
            <Form.Control type="password" placeholder="Password" />
            {/* <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Text className="text-muted">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</Form.Text>
          </Form.Group>
          <div className="mb-3">
          <Button variant="primary">
            Ingresar
          </Button>
          <Button variant="secondary" color="red">
            Cancelar
            </Button>
            </div>
        </Form>
        </div>
      );
}

export default SignInForm;