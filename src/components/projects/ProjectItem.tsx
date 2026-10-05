import type { IProject } from "../../interfaces/IProject";
import Card from "../ui/Card";

interface ProjectItemProps {
  project: IProject;
  reversed?: boolean; // true = bildet til høyre, teksten til venstre
}

const buttonStyle =
  "inline-block rounded-md bg-sun px-5 py-2 font-bold text-ocean-dark transition-colors hover:bg-aqua focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua";

const ProjectItem = ({ project, reversed = false }: ProjectItemProps) => {
  return (
    <article>
      {/* Mobil: bildet over teksten. Fra md og opp: side om side, og annenhver gang speilvendt */}
      <Card
        className={`flex flex-col gap-8 border-2 md:items-center ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          {project.image ? (
            <img
              src={project.image}
              alt={`Skjermbilde av ${project.title}`}
              className="aspect-video w-full rounded-lg object-cover object-top"
            />
          ) : (
            // Plassholder til du har lagt inn et skjermbilde
            <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-ocean-dark/60 text-5xl">
              🐠
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-lg text-aqua">{project.technologies.join(", ")}</p>

          <div>
            <h4 className="font-bold text-sun">Beskrivelse:</h4>
            <p className="mt-1 leading-relaxed">{project.description}</p>
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyle}
                >
                  Se nettsiden
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyle}
                >
                  Kode på GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </article>
  );
};

export default ProjectItem;
