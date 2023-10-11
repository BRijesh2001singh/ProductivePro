import React, { useState, useEffect } from 'react'
import { app } from '../context/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);
const SignUpForm = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const createuser = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      seterror("Email or Password cannot be empty.")
      return null;
    }
    createUserWithEmailAndPassword(auth, email, password).then(value => alert('Account Created')).catch((error) => {
      seterror("Email already in use!")
    });
  }
  useEffect(() => {//to remove error message when there is change in password or email
    seterror("");
  }, [email, password]);

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={createuser}>
        <h1 className='signh'>Create Account</h1>
        <div className="social-container">
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Create new Password"
        />
        <span className='error-msg'>{error}</span>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;

