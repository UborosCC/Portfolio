import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';
import { Link } from 'react-router-dom';
import './Navbar.css'
import sunIcon from '../images/sun.png';
import moonIcon from '../images/moon.png';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme],);
    
    useEffect(() => {
        const handleRezise = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleRezise);
        return () => window.removeEventListener('resize', handleRezise);
    }, []);

    return (
        <nav className={`navbar $(isDesktop ? 'desktop' : 'mobile')`}> 
        {!isDesktop && (
            <button onClick={() => setIsOpen(!isOpen)} className='menu-button'>{isOpen ? "X" : "-"}</button>
        )}
        <article className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
            <li><Link to={'/'} onClick={() => setIsOpen(false)} className='nav-link'>About Me</Link></li>
            <li><Link to={'/projects'} onClick={() => setIsOpen(false)} className='nav-link'>Projects</Link></li>
            <li><Link to={'contact'} onClick={() => setIsOpen(false)} className='nav-link'>Contact</Link></li>
            <button className='theme-button' onClick={() => dispatch(toggleTheme())}><img 
            className='theme-icon'
            src={theme === 'light' ? sunIcon : moonIcon} 
            alt={theme === 'light' ? 'Sun' : 'Moon'} />
            </button>
            </ul>
        </article>
        </nav>
    );
};

export default Navbar