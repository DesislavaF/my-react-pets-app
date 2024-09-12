import React from 'react';
import { auth } from '../../utils/firebase';

const Login = ({ history }) => {
    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log("Login attempt:", username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                console.log("Successfully logged in:", userCredential.user);
                history.push('/');
            })
            .catch((error) => {
                console.error("Error signing in:", error);
                alert("Error signing in: " + error.message);
            });
    };

    return (
        <section className="login">
            <form onSubmit={onLoginFormSubmitHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" required />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" required />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
