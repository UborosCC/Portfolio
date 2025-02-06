import ProjectItem from './ProjectItem'; //importerar ProjectItem

const ProjectList = ({ projects }) => { //tar emot projects som en prop
  return (
    <div>
      <h1 className='main-h1'>Projects</h1>
      {projects.map((project) => ( //loopar igenom listan med projects
        <ProjectItem key={project.id} project={project} /> //För varje projekt i listan, skickas project som en prop
      ))}
    </div>
  );
};

export default ProjectList;
