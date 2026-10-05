import ProjectList from "../projects/ProjectList";

const ProjectsSection = () => {
  return (
    <section id="prosjekter" aria-labelledby="prosjekter-tittel" className="scroll-mt-24 py-16">
      <h2 id="prosjekter-tittel" className="mb-8 text-3xl font-bold text-sun">
        Prosjekter
      </h2>
      <ProjectList />
    </section>
  );
};

export default ProjectsSection;
