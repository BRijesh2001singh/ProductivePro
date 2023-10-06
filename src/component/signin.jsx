import React, { useEffect, useState } from 'react'
import { app } from '../context/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);
function SignInForm(props) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const signin = (e) => {
        e.preventDefault();
        if (email.length === 0 || password.length === 0) {
            seterror("Email or Password Cannot be empty.");
            return null;
        }
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/');

        }).catch((error) => {
            seterror("Email or Password Invalid!");
        });
    }
    useEffect(() => {
        seterror("");
    }, [email, password]);

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={signin}>
                <h1 className='signh'>Sign in</h1>
                <div className="social-container"></div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <span className='error-msg'>{error}</span>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;