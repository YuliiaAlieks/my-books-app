import { useNavigate } from 'react-router-dom';

import * as authService from '..//../services/authService';

const Login = () => {
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');

        authService.login(email);
        navigate('/');
    }

    return (
        <section>
            <form id="login-form" onSubmit={onLogin}>
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