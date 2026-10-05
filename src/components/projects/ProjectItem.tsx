import type { IProject } from "../../interfaces/IProject";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface ProjectItemProps {
  project: IProject;
}

const linkStyle =
  "font-bold text-sun underline underline-offset-4 hover:text-aqua focus-visible:outline-2 focus-visible:outline-aqua";

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <article>
      <Card className="flex h-full flex-col gap-4">
        {project.image && (
          <img
            src={project.image}
            alt={`Skjermbilde av ${project.title}`}
            className="h-48 w-full rounded-lg object-cover"
          />
        )}

        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="flex-1">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge label={tech} />
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkStyle}>
              Se nettsiden
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={linkStyle}>
              Se koden
            </a>
          )}
        </div>
      </Card>
    </article>
  );
};

export default ProjectItem;
