import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { app } from '../context/firebase';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(app);
const Navbar = () => {
    const [quotes, setquotes] = useState("");
    const [user, setuser] = useState(null);
    useEffect(() => {  //getting quotes
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
    //check user auth
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            }
            else {
                setuser(null)
            }
        })
    })

    if (user !== null) {
        return (
            <div className='nav-container'>
                <div className='welcome'>
                    <h1>👋Welcome,{user.email.split("@")[0]}</h1>
                    <span className='quotes'>{quotes}</span>
                </div>
                <div className='profile'>
                    <i className="fa fa-user profile-in-icon" aria-hidden="true"></i>
                    <button className='log-in-btn' onClick={() => signOut(auth)}>LogOut</button>

                </div>
            </div>
        )
    }

    else {
        return (
            <div className='nav-container'>
                <div className='welcome'>
                    <h1>👋Hi,Guest</h1>
                    <span className='quotes'>{quotes}</span>
                </div>
                <div className='profile'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <Link to='/userlogin' className='user-log'>Signin</Link>

                </div>
            </div>
        )
    }
}
export default Navbar;
