import { useNavigate } from 'react-router-dom';
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
        <section>
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <label>LOGIN</label>
                    <p>
                        <label htmlFor="email">Email</label>
                        <span>
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <span>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button" type="submit" value="Login" />

                </fieldset>
            </form>

        </section>
    );
}

export default Login;