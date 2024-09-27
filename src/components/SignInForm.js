import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [validationStates, setValidationStates] = useState({ usernameState: true, passwordState: true });
    const [errorMessage, setErrorMessage] = useState(""); // Estado para almacenar el mensaje de error
    const navigate = useNavigate(); // Hook para redireccionar

    // Actualizar el valor del nombre de usuario
    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setFormValues({ ...formValues, username: newUsername });
        setValidationStates({ ...validationStates, usernameState: true });
    };

    // Actualizar el valor de la contraseña
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setFormValues({ ...formValues, password: newPassword });
        setValidationStates({ ...validationStates, passwordState: true });
    };

    // Función que hace la solicitud al backend para validar credenciales
    const authenticateUser = async (username, password) => {
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login: username, password: password }),
            });

            const result = await response.json();

            if (response.status === 200 && result.status === "success") {
                // Autenticación exitosa, redirige a la página de robots
                alert("Autenticación exitosa");
                setErrorMessage("");
                navigate("/robots");
            } else {
                // Si la autenticación falla
                setErrorMessage(result.message);
            }
        } catch (error) {
            console.error("Error al autenticar:", error);
            setErrorMessage("Hubo un problema con el servidor. Inténtalo más tarde.");
        }
    };

    const clickIngresar = () => {
        const { username, password } = formValues;

        if (username && password) {
            // Realiza la solicitud al backend para validar credenciales
            authenticateUser(username, password);
        } else {
            setErrorMessage("Por favor, complete todos los campos.");
        }
    };

    return (
        <div>
            <h3>Inicio de sesión</h3>

            <Form id="sign-in-form">
                <Form.Group className="mb-6" controlId="formBasicUsername">
                    <Form.Label><b>Nombre de usuario</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder=""
                        onChange={handleUsernameChange}
                        value={formValues.username}
                        isInvalid={!validationStates.usernameState}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Contraseña</b></Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        onChange={handlePasswordChange}
                        value={formValues.password}
                        isInvalid={!validationStates.passwordState}
                    />
                </Form.Group>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Mostrar mensaje de error */}

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Text className="text-muted">
                        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
                    </Form.Text>
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
