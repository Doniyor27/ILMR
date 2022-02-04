import ProjectsCarousel from "./carousel";
import "./style.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container container">
        <div className="projects-inner container">
          <ProjectsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;