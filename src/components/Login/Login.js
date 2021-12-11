import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '..//../services/authService';

const Login = () => {
    const { login } = useContext(AuthContext);
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
                navigate('/dashboard');
            })
            .catch(err => {
                //TODO: Show notification
                console.log("🧚 ~ err", err);

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