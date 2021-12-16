import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// import { Form, Button } from 'react-bootstrap';
import './Register.css'
import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, notificationTypes } from '../../contexts/NotificationContext';


const Register = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    const [emailErrors, setEmailErrors] = useState({ title: false });
    const [passwordErrors, setPasswordErrors] = useState({ title: false });
    const [confirmationErrors, setConfirmationErrors] = useState({ title: false });

    const emailChangeHandler = (e) => {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const emailInput = e.target.value;
        if (!emailInput.match(regexEmail)) {
            setEmailErrors(state => ({ ...state, title: 'You need to enter a valid email' }));
        } else {
            setEmailErrors(state => ({ ...state, title: false }));
        }
    }

    const passwordChangeHandler = (e) => {
        const passwordInput = e.target.value;

        if (passwordInput.length < 6 && passwordInput.length > 0) {
            setPasswordErrors(state => ({ ...state, title: 'Password is too short. Password should be at least 6 characters long' }));
        } else if (passwordInput.length === 0) {
            return;
        } else {
            setPasswordErrors(state => ({ ...state, title: false }));
        }
    }

    const registerHandler = (e) => {
        e.preventDefault();
        const { email, password, confirmation } = Object.fromEntries(new FormData(e.currentTarget));
        console.log("🧚 ~ confirmation", confirmation)
        console.log("🧚 ~ password", password)
        console.log("🧚 ~ email", email)

        if (password !== confirmation) {
            setConfirmationErrors(state => ({ ...state, title: 'Password doesn`t match' }));
            return;
        } else {
            setConfirmationErrors(state => ({ ...state, title: false }));
        }

        authService.register(email, password)
            .then(authData => {
                console.log("🧚 ~ authData", authData);
                login(authData);
                navigate('/dashboard');

            })
            .catch(err => {
                console.log("🧚 ~ err", err);
                addNotification('Unfortunately, we could not register you. Please check your details and try again.', notificationTypes.error);
            });
    }

    return (
        // <section>
        //     <h3>REGISTER</h3>

        //     <Form className='register-form'>
        //         <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={registerHandler} method="POST">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" onBlur={emailChangeHandler} />
        //             <Form.Text className="text-muted" style={{ display: emailErrors.title ? 'inline' : 'hidden' }}>
        //                 {emailErrors.title}
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" onBlur={passwordChangeHandler} />
        //             <Form.Text className="text-muted" style={{ display: passwordErrors.title ? 'inline' : 'hidden' }}>
        //                 {passwordErrors.title}
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        //             <Form.Label>Confirm Password</Form.Label>
        //             <Form.Control type="password" placeholder="Repeat password" />
        //             <Form.Text className="text-muted" style={{ display: confirmationErrors.title ? 'inline' : 'hidden' }}>
        //                 {confirmationErrors.title}
        //             </Form.Text>
        //         </Form.Group>

        //         <Button variant="primary" type="submit" >
        //             Register
        //         </Button>
        //     </Form>
        // </section>

        <section>
            <form id="register-form" onSubmit={registerHandler} method="POST" >
                <fieldset>
                    <label>REGISTER</label>
                    <p>
                        <label htmlFor="email">Email</label>
                        <span>
                            <input type="text" name="email" id="email" placeholder="Email" onBlur={emailChangeHandler} />
                        </span>
                        <span style={{ display: emailErrors.title ? 'inline' : 'hidden' }}>
                            {emailErrors.title}
                        </span>
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <span>
                            <input type="password" name="password" id="password" placeholder="Password" onBlur={passwordChangeHandler} />
                        </span>
                        <span style={{ display: passwordErrors.title ? 'inline' : 'hidden' }}>
                            {passwordErrors.title}
                        </span>
                    </p>
                    <p>
                        <label htmlFor="conf-pass">Confirm Password</label>
                        <span>
                            <input type="password" name="confirmation" id="conf-pass" placeholder="Repeat Password" />
                        </span>
                        <span style={{ display: confirmationErrors.title ? 'inline' : 'hidden' }}>
                            {confirmationErrors.title}
                        </span>
                    </p>
                    <input className="button" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>

    )
}

export default Register;