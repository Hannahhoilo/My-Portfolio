import { projects } from "../../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project, index) => (
        // index brukes til å bytte side på bildet annenhver gang
        <ProjectItem
          key={project.id}
          project={project}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default ProjectList;
