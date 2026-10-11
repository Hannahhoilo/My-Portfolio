import type { IProject } from "../interfaces/IProject";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";



export const projects: IProject[] = [
  {
    id: 1,
    title: "bachelorgruppe.no",
    description:
      "Landingsside for bachelorgruppen min ved Høyskolen Kristiania, med presentasjon av gruppen, medlemmene og emnene vi har hatt. Bygget med Expo, React Native og TypeScript, stylet med NativeWind, og responsiv for både web og mobil. Hvis du ikke vil opprette en bruker kan du logge inn med hei@sveis.no med passord heisveis.",
    technologies: ["React Native", "TypeScript", "Expo", "NativeWind"],
    liveUrl: "https://bachelorgruppe.no",
    githubUrl: "https://github.com/Hannahhoilo/bachelorgruppe/",
    image: project1,
  },
  {
    id: 2,
    title: "Gameflix",
    description:
      "Gameflix er en nettside for å utforske videospill, med data hentet fra RAWG-API-et. Brukere må logge inn med Firebase for å se innholdet, og kan sortere spillene etter utgivelsesår, navn eller rating, filtrere på sjanger og plattform, og søke etter spill. API-nøkkelen er skjult bak en egen serverfunksjon.",
    technologies: ["Firebase", "JavaScript"],
    liveUrl: "https://gameflix.hannahhoilo.workers.dev/",
    githubUrl: "https://github.com/Hannahhoilo/Final-Project-24",
    image: project2,
  },
  {
    id: 3,
    title: "My Shop",
    description:
      "Nettbutikk for brukte spill og konsoller, bygget med HTML, CSS og vanilla JavaScript (ES6+) uten rammeverk. Produktene hentes fra en egen JavaScript-modul og vises dynamisk, og handlekurven lagres i localStorage med totalpris og teller i headeren. Du kan søke, filtrere på retrospill og fjerne varer, og layouten er responsiv med eget CSS Grid-system.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://my-shop.hannahhoilo.workers.dev/",
    githubUrl: "https://github.com/Hannahhoilo/My-Shop/",
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
