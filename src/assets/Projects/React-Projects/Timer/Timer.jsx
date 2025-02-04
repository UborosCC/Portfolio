import { useState, useEffect, useRef } from 'react'; //importerar useState, useEffect och useRef, useState för att skapa state variabler, useEffect för att köra sid effekter som att starta och stoppa timer, useRef för att skapa en referens som kvarstår mellan renderingar utan att orsaka omrenderingar 
import { useNavigate } from 'react-router-dom'; //importerar useNavigate, hjälper oss att navigera mellan sidor
import './Timer.css'; //importerar Timer.css

function Timer() {
const navigate = useNavigate(); //Hjälper til med att navigera mellan sidor
const [count, setCount] = useState(0); //Håller koll på antal sekunder som har gått, sekunderna börjar på 0
const [isRunning, setIsRunning] = useState(false); //Håller koll om timer är på gång eller inte, den är false eftersom timer är inte på gång vid sidans start 
const timerRef = useRef(null); //Skapar en referens för att lagra timer id, används för att inte skapa omrenderingar när tierRef ändras

const formatTime = (totalSeconds) => { //Kalkylerar timmar, minuter och sekunder för timer
    const hours = String(Math.floor(totalSeconds / 3000)).padStart(2, '0'); //Kalkylerar timmar
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'); //Kalkylerar minuter
    const seconds = String(totalSeconds % 60).padStart(2, '0'); //Kalkylerar sekunder
    return `${hours}:${minutes}:${seconds}`; //return timmar, minuter och sekunder för att displaya till timer
}

const handleStart = () => { 
    if (!isRunning) { //Säkerställer så att timer inte startar flera gånger
        setIsRunning(true); //Uppdaterar IsRunning till true
        timerRef.current = setInterval(() => { //Sparar intervall id, så att vi kan radera den senare
            setCount((prev) => prev + 1); //Ökar count med 1 varje sekund, prev används för att säkerställa att varje uppdatering är baserad på senaste valuta
        }, 1000) //Funktionen körs varje 1000ms
    }
};

const handlePause = () => { 
    setIsRunning(false); //Uppdaterar isRunning till false
    clearInterval(timerRef.current); //Stoppar intervallet, gör att count slutar att ökas
    timerRef.current = null; //Återställer referensen 
};

const handleReset = () => { 
    setIsRunning(false); //Uppdaterar Isrunning till false
    clearInterval(timerRef.current); //Stoppar intervallet, gör att count slutar att ökas
    timerRef.current = null; //Återst'ller referensen
    setCount(0); //Sätter count tillbaka till 0
};

//Körs endast en gång när komponenten monteras, return rensar intervallet när komponenten är avmonterad för att hindra minnesläckor
useEffect (() => { 
    return () => clearInterval(timerRef.current); 
}, []);

return (
    <main className='timer-main'>
        <button className='back-button' onClick={() => navigate('/greeting')}>Go Back</button>
        <h1 className='timer'>Timer: {formatTime(count)}</h1>
        <section className='timer-buttons'>
            <button className='start-button' onClick={handleStart} disabled={isRunning}>Start</button>
            <button className='pause-button' onClick={handlePause} disabled={!isRunning}>Pause</button>
            <button className='reset-button' onClick={handleReset}>Reset</button>
        </section>
    </main>
);
}

export default Timer;