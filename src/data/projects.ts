import type { IProject } from "../interfaces/IProject";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";



export const projects: IProject[] = [
  {
    id: 1,
    title: "bachelorgruppe.no",
    description: "Her kommer en kort beskivelse av prosjektet mitt .",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://bachelorgruppe.no",
    image: project1,
  },
  {
    id: 2,
    title: "My Shop",
    description: "Her kommer mer tekst. Her kommer mer tekst.",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 3,
    title: "Gameflix",
    description:
      "Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst.",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://gameflix.hannahhoilo.workers.dev/",
    image: project3,
  },
  {
    id: 4,
    title: "Pokedex iOS",
    description:
      "Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst.",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 5,
    title: "Anime List",
    description:
      "Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst.",
    technologies: ["React", "TypeScript"],
  },
  {
    id: 6,
    title: "Star Wars API",
    description:
      "Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst. Her kommer mer tekst.",
    technologies: ["React", "TypeScript"],
  },
];
