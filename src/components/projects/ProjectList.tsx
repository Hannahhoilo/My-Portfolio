import { projects } from "../../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
