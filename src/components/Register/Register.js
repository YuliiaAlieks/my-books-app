const Register = () => {
    const onRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log("🧚 ~ formData-email", formData.get('email'));
        console.log("🧚 ~ formData-password", formData.get('password'));
        
    }

    return (
        <section>
            <form id="register-form" onSubmit={onRegister} method="POST" >
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