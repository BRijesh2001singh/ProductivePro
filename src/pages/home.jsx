import React, { useEffect, useState } from 'react';
import Todo from './../component/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './../component/navbar';
import PomodoroTimer from '../component/pomodro';
import darkbgimg from '../images/image.jpg'
import lightbgimg from '../images/lightbg.jpg';
const Home = (props) => {
  const [settings, setsettings] = useState(false)
  const [display, setdisplay] = useState("Pomodro Timer");
  const [darkmode, setdarkmode] = useState('true');
  const [bgimage, setbgimage] = useState(`${darkbgimg}`);
  const [settingdisplay, setsettingdisplay] = useState('hidden');
  const showtimer = () => {
    setsettings(!settings);
    if (display === "Pomodro Timer")
      setdisplay("Show Tasks");
    else setdisplay("Pomodro Timer");
  }
  const showsetting = () => {
    if (settingdisplay === 'hidden')
      setsettingdisplay('visible');
    else setsettingdisplay('hidden');
  }
  const tododisplay = settings ? "hidden" : "visible";
  const timersplay = settings ? "visible" : "hidden";
  //changing dark/lightmode
  const changemode = () => {
    setbgimage({ lightbgimg });
    console.log(bgimage);
    setdarkmode('false');
  }
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgimage})`;
  }, [bgimage])
  return (
    <>
      <div>
        <header>
          <Navbar mode={darkmode} />
        </header>
        <div className='dis-set'>
          <button className="setting setting-icon" onClick={showsetting}><i className="fa fa-cog" aria-hidden="true"></i></button>
          <div className={`${settingdisplay}`}>
            <button className='setting' onClick={showtimer}>{display}</button>
            <button className='setting' onClick={showtimer}>Play Music</button>
            <button className='setting'><a href='https://chrome.google.com/webstore/detail/block-site-ex/nnkkgbabjapocnoedeaifoimlbejjckj/related' rel='noreferrer' target='_blank' style={{
              fontSize: "13px",
              fontWeight: "bold",
            }}>Website Blocker</a></button>
          </div>
        </div>
        <div className='home-dis'>
          <div className={tododisplay}><Todo mode={darkmode} /></div>
          <div className={timersplay}><PomodoroTimer mode={darkmode} /></div>
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