import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import './Navbar.css'

const Navbar = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <nav className='navbar'> 
            <a className='nav-link'>About Me</a>
            <a className='nav-link'>Projects</a>
            <a className='nav-link'>Contact</a>
            <button className="theme-button" onClick={() => dispatch(toggleTheme())}><img 
            className="theme-icon"
            src={theme === "light" ? "/sun.png" : "/moon.png"} 
            alt={theme === "light" ? "Sun" : "Moon"} />
            </button>
        </nav>
    );
};

export default Navbar