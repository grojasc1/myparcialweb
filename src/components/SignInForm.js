import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignInForm = () => {
    const [usernameSaved, setUsernameSaved] = useState("admin");
    const [passwordSaved, setPassword] = useState("admin");

    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [validationStates, setValidationStates] = useState({ usernameState: true, passwordState: true });
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setFormValues({ ...formValues, username: newUsername });

        // Validación del username mientras el usuario escribe
        const isUsernameValid = validateUsername(newUsername);
        setValidationStates({ ...validationStates, usernameState: isUsernameValid });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setFormValues({ ...formValues, password: newPassword });

        // Validación de la contraseña mientras el usuario escribe
        const isPasswordValid = validatePassword(newPassword);
        setValidationStates({ ...validationStates, passwordState: isPasswordValid });
    };

    const validateUsername = (username) => {
        return username === usernameSaved;
    };

    const validatePassword = (password) => {
        return password === passwordSaved;
    };

    const clickIngresar = () => {
        if (validateUsername(formValues.username) && validatePassword(formValues.password)) {
            alert("Ingresando al sistema");
            setErrorMessage(""); // Reiniciar el mensaje de error si es correcto
        } else {
            setErrorMessage("Error en la autenticación. Revise sus credenciales");
        }
    };

    return (
        <div>
            <h3>Inicio de sesión</h3>

            <Form id="sign-in-form">
                <Form.Group className="mb-6" controlId="formBasicUsername">
                    <Form.Label><b>Nombre de usuario</b></Form.Label>
                    <Form.Control type="text" placeholder="" onChange={handleUsernameChange} value={formValues.username} isInvalid={!validationStates.usernameState} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Contraseña</b></Form.Label>
                    <Form.Control type="password" placeholder="" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordState} />
                </Form.Group>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Mostrar mensaje de error */}

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Text className="text-muted">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</Form.Text>
                </Form.Group>

                <div className="mb-3">
                    <Button variant="primary" onClick={clickIngresar}>
                        Ingresar
                    </Button>
                    <Button variant="secondary">
                        Cancelar
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignInForm;
