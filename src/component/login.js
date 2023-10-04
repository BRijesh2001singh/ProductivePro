import React, { useState } from 'react'
const Login = ({ onClose }) => {
    const [user, setUser] = useState("");
    const userlogin = (e) => {
        setUser(e.target.value);
    }
    return (
        <div>
            <div className='login-div'>

                <div className='details-div'>
                    <input type='text' value={user} placeholder='enter your name' onChange={userlogin} />
                    <button onClick={onClose}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
