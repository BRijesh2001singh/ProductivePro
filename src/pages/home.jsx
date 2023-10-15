import React, { useEffect, useState } from 'react';
import Todo from './../component/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './../component/navbar';
import PomodoroTimer from '../component/pomodro';
import darkbgimg from '../images/image.jpg'
import Playmusic from './playmusic';
import { Link } from 'react-router-dom';
const Home = (props) => {
  const [settings, setsettings] = useState(false)
  const [display, setdisplay] = useState("Focus Tools");
  const [bgimage, setbgimage] = useState(`${darkbgimg}`);
  const [settingdisplay, setsettingdisplay] = useState('hidden');
  console.log("hello")
  console.log(process.env.REACT_APP_FIREBASE_API)
  const showtimer = () => {
    setsettings(!settings);
    if (display === "Focus Tools")
      setdisplay("Show Tasks");
    else setdisplay("Focus Tools");
  }
  const showsetting = () => {
    if (settingdisplay === 'hidden')
      setsettingdisplay('visible');
    else setsettingdisplay('hidden');
  }
  const tododisplay = settings ? "hidden" : "visible";
  const toolsdisplay = settings ? "visible" : "hidden";
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgimage})`;
  }, [bgimage])

  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <div className='dis-set'>
          <button className="setting setting-icon" onClick={showsetting}><i className="fa fa-cog" aria-hidden="true"></i></button>
          <div className={`${settingdisplay}`}>
            <button className='setting' onClick={showtimer}>{display}</button>
            <Link to='extension'><button className='setting'>
              Website Blocker
            </button></Link>
          </div>
        </div>
        <div className='home-dis'>
          <div className={tododisplay}><Todo /></div>
          <div className={`${toolsdisplay}`}>
            <div className='tools'>
              <div className=''><PomodoroTimer /></div>
              <div ><Playmusic /></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer
          position="top-right"  // Adjust the position as needed
          autoClose={7000}      // Set the auto-close durclation in milliseconds
          hideProgressBar={false} // You can choose to hide the progress bar
          newestOnTop={false}    // Show newest toast at the top
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  )
}
export default Home;