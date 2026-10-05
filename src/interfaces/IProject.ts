export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string; // ? betyr at feltet er valgfritt
  githubUrl?: string;
  image?: string;
}
