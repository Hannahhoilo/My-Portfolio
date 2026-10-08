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
    description:
      "Responsiv nettbutikk utviklet med HTML5, CSS3 og vanilla JavaScript (ES6+), uten bruk av rammeverk. Produktene hentes fra en egen IIFE-modul og rendres dynamisk på siden. Nettbutikken har et eget 12-kolonners CSS Grid-system med tre breakpoints og BEM-navngivning for en strukturert og responsiv layout. Funksjonaliteten inkluderer søk og filtrering av produkter, handlekurv med lagring i localStorage, totalpris, mulighet for å fjerne varer og en dynamisk vareteller i headeren. I tillegg brukes <dialog> til popup-vinduer og et bekreftelseselement ved når en vare legges i handlekurven.",
    technologies: ["JavaScript"],
    
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
