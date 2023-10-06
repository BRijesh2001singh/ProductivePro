import React from 'react'
import Todo from './../component/todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './../component/navbar';
import PomodoroTimer from './pomodro';
const Home = () => {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <div className='home-dis'> <PomodoroTimer />
          <Todo />
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
