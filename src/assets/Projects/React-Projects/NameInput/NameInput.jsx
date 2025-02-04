import { useState } from 'react'; //importerar useState, hjälper oss att spara och uppdatera namn som skrivs ner på input field
import { useDispatch } from 'react-redux';//importerar useDispatch, hjälper till att spara användarens namn när det skrivs ner
import { useNavigate } from 'react-router-dom'; //importerar useNavigate, hjälper oss att navigera mellan sidor
import { setName } from '../../../../redux/UserSlice/'; //importerar setName, en action skapad i UserSlice.jsx som updaterar Redux state när användaren skriver ner deras namn
import './NameInput.css'; //importerar NameInput.CSS

const NameInput = () => {
    const [inputName, setInputNameState] = useState('');
    const dispatch = useDispatch() //Låter oss at skicka actions till Redux, används för att lagra använderans namn när de har pressat på submit knappen
    const navigate = useNavigate(); //Hjälper till att navigera mellan sidor

    const handleSubmit = (e) => {
        e.preventDefault(); //Hindrar sidan att refresha när submit knappen har pressat 
        if (inputName.trim()) {
            dispatch(setName(inputName)); //Updaterar Redux state, skickar en action till Redux att uppdatera användarens namn 
            navigate(`/greeting?name=${encodeURIComponent(inputName)}`); //Navigerar vidare till Greeting sidan efter de har submit deras namn
        }
    };

    return (
        <main className='nameinput-main'>
        <button className='back-button' onClick={() => navigate('/projects')}>Go Back</button>
        <h1 className='name-greeting'>Welcome, please enter your name:</h1>
        <form onSubmit={handleSubmit}>
            <input className='name-input' type='text' value={inputName} onChange={(e) => setInputNameState(e.target.value)} placeholder='Your Name'/>
            <button className='name-button' type='submit'>Submit</button>
        </form>
        </main>
    );
}

export default NameInput; 