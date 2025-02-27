import { useEffect, useState } from 'react'; //importerar useState och useEffect, useState hanterar state variabler, useEffect hanterar biverkningar
import { useSelector, useDispatch } from 'react-redux'; //importerar useSelector och useDispatch, useSelector extrahera data från våran store, useDispatch för att skicka actions och uppdatera states
import { Link, useLocation } from 'react-router-dom'; //importerar Link och useLocation
import { toggleTheme } from '../../redux/ThemeSlice'; //importerar toggleTheme
import './Navbar.css' //importerar Navbar.css
import sunIcon from '../images/sun.png';
import moonIcon from '../images/moon.png'; //importerar sunIcon och moonIcon


const Navbar = () => {
    const location = useLocation(); //Används för att hålla fast active class på Link
    const [isOpen, setIsOpen] = useState(false); //Används för att hålla koll om något är öppet eller inte, useState(false) eftersom den ska börja stängd
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); //Håller koll om skärmen är minst 768px på width
    const theme = useSelector((state) => state.theme.theme); //Hämtar theme från Redux store
    const dispatch = useDispatch(); //Används för att växla mellan 'light' och 'dark' theme

    //Byter data-theme till 'light' eller 'dark' beroende på vilken den har växlat till
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme],);
    
    //Håller koll om skärmen ändrar storlek
    useEffect(() => {
        const handleRezise = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleRezise);
        return () => window.removeEventListener('resize', handleRezise); //tar bort EventListener för att hindra minnesläckor
    }, []);

    return (
        <nav className={`navbar $(isDesktop ? 'desktop' : 'mobile')`}> 
            {!isDesktop && (<button onClick={() => setIsOpen(!isOpen)} className='menu-button'>{isOpen ? "X" : "⚌"}</button>)}
            <article className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to={'/'} onClick={() => setIsOpen(false)} className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link></li>
                    <li><Link to={'/about'} onClick={() => setIsOpen(false)} className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About Me</Link></li>
                    <li><Link to={'/projects'} onClick={() => setIsOpen(false)} className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}>Projects</Link></li>
                    <li><Link to={'/contact'} onClick={() => setIsOpen(false)} className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
                    <button className='theme-button' onClick={() => dispatch(toggleTheme())}><img className='theme-icon' src={theme === 'light' ? sunIcon : moonIcon}  alt={theme === 'light' ? 'Sun' : 'Moon'} /></button>
                </ul>
            </article>
        </nav>
    );
};

export default Navbar