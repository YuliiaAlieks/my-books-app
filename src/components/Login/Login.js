import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../Common/FormStyle.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { notificationTypes, useNotificationContext } from '../../contexts/NotificationContext';
import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then(authData => {
                console.log('logged');

                login(authData);
                addNotification('You logged in successfully', notificationTypes.success);
                navigate('/dashboard');
            })
            .catch(err => {
                console.log("🧚 ~ err", err);
                addNotification("Email or password don't match. Please check your details and try again.", notificationTypes.error);
            });
    }

    return (
        <Form className='form-wrapper' onSubmit={onLoginHandler} method="POST">
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;