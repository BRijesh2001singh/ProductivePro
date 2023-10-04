import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from './login';
const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);//adding loginoverlay
    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    const [quotes, setquotes] = useState("");
    useEffect(() => {
        const dailyquote = async () => {
            await axios.get('https://api.quotable.io/random').then(Response => {
                const { content } = Response.data;
                setquotes(content);
            }).catch(error => {
                console.log(error);
            })
        }
        dailyquote();
    }, []);
    return (
        <div className='nav-container'>
            <div className='welcome'>
                <h1>👋Hi,Brijesh</h1>
                <span className='quotes'>{quotes}</span>
            </div>
            <div className='profile'>
                <i className="fa fa-user" aria-hidden="true" onClick={toggleLogin}></i>
                {showLogin && <Login onClose={toggleLogin} />}
            </div>
        </div>
    )
}
export default Navbar;
