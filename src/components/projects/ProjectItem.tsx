import type { IProject } from "../../interfaces/IProject";
import Card from "../ui/Card";

interface ProjectItemProps {
  project: IProject;
  reversed?: boolean; // true = bildet til høyre, teksten til venstre
}

const buttonStyle =
  "inline-block rounded-md bg-sun px-5 py-2 font-bold text-ocean-dark transition-colors hover:bg-aqua focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua";

/* Rammen vokser litt og får skygge. "group" gjør at innholdet kan reagere på hover på rammen.
overflow-hidden holder det zoomede bildet innenfor rammen.
motion-safe: animasjonen slås av for brukere som har valgt redusert bevegelse*/
const frameStyle =
  "group aspect-video w-full overflow-hidden rounded-lg transition-transform duration-300 ease-out motion-safe:hover:scale-105 hover:shadow-2xl";

// Bildet zoomer inn inni rammen når musa er over rammen
const zoomStyle =
  "transition-transform duration-500 ease-out motion-safe:group-hover:scale-110";

const ProjectItem = ({ project, reversed = false }: ProjectItemProps) => {
  return (
    <article>
      <Card
        className={`flex flex-col gap-8 border-2 md:items-center ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <div className={frameStyle}>
            {project.image ? (
              <img
                src={project.image}
                alt={`Skjermbilde av ${project.title}`}
                className={`h-full w-full object-cover object-top ${zoomStyle}`}
              />
            ) : (
              // placeholder-fisk, skal komme skjermbilder av prosjekter 
              <div
                className={`flex h-full w-full items-center justify-center bg-ocean-dark/60 text-5xl ${zoomStyle}`}
              >
                🐠
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-lg text-aqua">{project.technologies.join(", ")}</p>

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

          <div>
            <h4 className="font-bold text-sun">Beskrivelse av mitt superkule prosjekt :</h4>
            <p className="mt-1 leading-relaxed">{project.description}</p>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default ProjectItem;
