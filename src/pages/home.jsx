import React, { useState } from 'react'
import Todo from './../component/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './../component/navbar';
import PomodoroTimer from '../component/pomodro';
const Home = () => {
  const [settings, setsettings] = useState(false)
  const [display, setdisplay] = useState("Setting");
  const showsettings = () => {
    setsettings(!settings);
    if (display === "Setting")
      setdisplay("Show Tasks");
    else setdisplay("Setting");
  }
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <button className="setting" onClick={showsettings}><i class="fa fa-cog" aria-hidden="true"></i>{display}</button>
        <div className='home-dis'>
          {settings ? <PomodoroTimer /> : <Todo />}
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
