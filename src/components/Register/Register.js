import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';



const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                console.log("🧚 ~ authData", authData);
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
            <form id="register-form" onSubmit={registerHandler} method="POST" >
                <fieldset>
                    <label>REGISTER</label>
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
                    <p>
                        <label htmlFor="conf-pass">Confirm Password</label>
                        <span>
                            <input type="password" name="confirm-pass" id="conf-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>

    )
}

export default Register;