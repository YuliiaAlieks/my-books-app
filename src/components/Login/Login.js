const Login = () => {
    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log("🧚 ~ formData - email", formData.get('email'));
        
    }

    return (
        <section>
            <form id="login-form" onSubmit={onLogin}>
                <fieldset>
                    <label>LOGIN</label>
                    <p>
                        <label for="email">Email</label>
                        <span>
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p>
                        <label for="password">Password</label>
                        <span>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input class="button" type="submit" value="Login" />

                </fieldset>
            </form>

        </section>
    );
}

export default Login;