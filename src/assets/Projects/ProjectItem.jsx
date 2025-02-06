import { Link } from "react-router-dom"; //impoterar Link
import './Projects.css'; //importerar Projects.css


const ProjectItem = ({ project }) => { //project tas some en prop och sedan användas för att visas i articlen
  return ( 
    <article>
      <Link to={project.destination} className="project-links">{project.title}</Link>
      <p className="project-description">{project.description}</p> 
    </article>
  );
};

export default ProjectItem;
