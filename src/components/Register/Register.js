import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';



const Register = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const emailChangeHandler = (e) => {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailInput = e.target.value;
        if (!emailInput.match(regexEmail)) {
            console.log('You need to enter a valid email');
        }
        return;
    }

    const passwordChangeHandler = (e) => {
        const passwordInput = e.target.value;

        if (passwordInput.length < 6) {
            console.log('Password is too short. Password should be at least 6 characters long');
        }
        return;
    }

    const registerHandler = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        // console.log("🧚 ~ confirmPass", confirmPass)
        // if (password !== confirmPass) {
        //     return 'Password doesn`t match';
        // }

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
                            <input type="text" name="email" id="email" placeholder="Email" onBlur={emailChangeHandler} />
                        </span>
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <span>
                            <input type="password" name="password" id="password" placeholder="Password" onBlur={passwordChangeHandler} />
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