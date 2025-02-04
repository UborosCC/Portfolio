import { useSelector } from 'react-redux'; //importerar useSelector, används till att accessera Redux store för att hämta användarens namn
import { useNavigate, Link } from 'react-router-dom'; //importerar useNavigate, hjälper oss att navigera mellan sidor
import './Greeting.css'; //importerar Greeting.css


const Greeting = () => {
    const name = useSelector((state) => state.user.name) || 'Guest'; //Använder useSelector för att hämta namnet från user, om det finns inget namn eller det är undefined kommer det ut som "Guest" istället
    const navigate = useNavigate(); //Hjälper till att navigera mellan sidor

    const getTime = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return { greeting: 'Good Morning', style: morningStyle, icon: '☀️' };
        }
        if (hour < 18) {
            return { greeting: 'Good Afternoon', style: afternoonStyle, icon: '🌤️' };
        }
        return { greeting: 'Good Evening', style: eveningStyle, icon: '🌙' }; //Beroende på tid på dygnet har sidan olika hälsningar, style och ikon
    };

    const morningStyle = {
        backgroundImage: 'linear-gradient(#ffd700, #ff7b00, #ff4000)',
      };
    
      const afternoonStyle = {
        backgroundImage: 'linear-gradient(#b6d8f0, #87cefa, #87a9fa)',      
      };
    
      const eveningStyle = {
        backgroundImage: 'linear-gradient(#516678 ,#2c3e50, #1f2830)',   
      };

    const { greeting, style, icon } = getTime(); //Call:ar getTime() funktionen som sedan skickar tillbaka de olika objekterna { greeting, style eller icon }

    return (
        <section className='greeting-section' style={style}>
            <button className='back-button' onClick={() => navigate('/nameinput')}>Go Back</button>
            <article className='greeting-box'>
                <h1>{`${greeting}, ${name}!`}</h1>
                <span style={{ fontSize: '5rem' }}>{icon}</span>
            </article>
            <nav className='greeting-navbox'>
                <h2 className='greeting-h2'>Please choose your next destination</h2>
                <ul className='greeting-ul'>
                    <li className='greeting-list'><Link className='greeting-link' to="/timer">Timer</Link></li>                   
                    <li className='greeting-list'><Link className='greeting-link' to='/color'>Color</Link></li>                   
                </ul>
            </nav>
        </section>
    );
};

export default Greeting;