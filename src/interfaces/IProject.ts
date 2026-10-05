export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string; 
  githubUrl?: string;
  image?: string;
}
