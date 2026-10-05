import type { IProject } from "../interfaces/IProject";

// Nytt prosjekt? Legg til et nytt objekt i listen, så dukker det opp på Prosjekter-siden.
// TODO: skriv egne beskrivelser og fyll inn riktige teknologier og lenker
export const projects: IProject[] = [
  {
    id: 1,
    title: "bachelorgruppe.no",
    description: "Kort beskrivelse av prosjektet og hva du bidro med.",
    technologies: ["React", "TypeScript"],
    liveUrl: "https://bachelorgruppe.no",
  },
  {
    id: 2,
    title: "Lucas Cars",
    description: "Kort beskrivelse av prosjektet og hva du bidro med.",
    technologies: ["React", "TypeScript"],
  },
];
