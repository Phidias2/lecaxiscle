import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                navigate("/admin/dashboard")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
        <div className="boxer">
                <div className="container">
                    <div className='card1'>

                        <form>
                            <label for="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div class="buttons">
                                {/* <button className="register-button">Register</button> */}
                                <button type="submit" className="login-button" onClick={onLogin}>Se connecter</button>
                            </div>
                        </form>
                    </div>

                </div>
                </div>
            </>
            )
}

            export default Login