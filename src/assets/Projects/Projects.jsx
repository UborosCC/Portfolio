import { useSelector } from 'react-redux'; //importerar useSelector, används till att accessera Redux store för att hämta användarens namn
import { selectProjects } from '../../redux/ProjectSlice'; //importerar selectProjects
import ProjectList from './ProjectList'; //importerar ProjectList


const Projects = () => {
    const projects = useSelector(selectProjects); //projects hämtas från Redux store med useSelector
    return <ProjectList projects={projects} />; //projects skickas som en prop vidare till ProjectList
}

export default Projects;