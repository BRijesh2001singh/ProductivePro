import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler'; // Import Howler.js
import '../styles/pomodro.css';

// Import the audio file
import timerEndSound from '../sounds/alarm_classic.mp3';

function PomodoroTimer() {
    const [workTime, setWorkTime] = useState(25);
    const [restTime, setRestTime] = useState(5);
    const [timer, setTimer] = useState(workTime * 60);
    const [isRunning, setIsRunning] = useState(false);
    const isWorkingRef = useRef(true);
    const sound = new Howl({
        src: [timerEndSound],
        preload: true,
    });
    const settingwork = (e) => {
        const inputValue = parseInt(e.target.value);
        if (!isNaN(inputValue) && inputValue >= 1) {
            setWorkTime(inputValue);
        } else {
            setWorkTime("");
        }
    }
    // Separate the timer logic from the effect
    useEffect(() => {
        setTimer(isWorkingRef.current ? workTime * 60 : restTime * 60);
    }, [workTime, restTime]);

    useEffect(() => {
        if (isRunning) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        isWorkingRef.current = !isWorkingRef.current;

                        // Play the audio when the work timer ends
                        sound.play();

                        return isWorkingRef.current ? workTime * 60 : restTime * 60;
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);

            return () => {
                clearInterval(intervalId);
                sound.stop(); // Stop the audio when the timer is reset or component unmounts
            };
        }
    }, [isRunning, workTime, restTime]);

    const handleStartStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        isWorkingRef.current = true;
        setTimer(workTime * 60);
        sound.stop(); // Stop the audio when the timer is reset
    };

    return (
        <div className='main-pomo'>
            <div className="pomodoro-timer">
                <div className='set-div'>
                    <p className='show-time'>{`${Math.floor(timer / 60)}:${(timer % 60)
                        .toString()
                        .padStart(2, '0')}`}</p>
                </div>
                <h1 className='pomo-h'>{isWorkingRef.current ? 'Work Time' : 'Rest Time'}</h1>
                <div className='timer-show-div'>
                    <div className='timer-btns'>
                        <button onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                    <div className='toggle-time'>
                        <div>
                            <label>Work Time (minutes):</label>
                            <input
                                min={1}
                                type="number"
                                value={workTime}
                                onChange={settingwork}
                            />
                        </div>
                        <div>
                            <label>Rest Time (minutes):</label>
                            <input
                                type="number"
                                value={restTime}
                                min={1}
                                onChange={(e) => setRestTime(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PomodoroTimer;
