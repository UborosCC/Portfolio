import { Link } from "react-router-dom"
import "./Projects.css"


const Projects = () => {
    return (
        <>
            <h1 className="main-h1">Projects</h1>
            <Link to={"/cosmiccafe"} className="project-links">Cosmic Café [a HTML Project]</Link>
            <Link to={"/nameinput"} className="project-links">React Projects</Link>
        </>
    )
}

export default Projects