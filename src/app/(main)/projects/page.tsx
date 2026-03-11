import data from "@/data/projects";
import ProjectCard from "@/app/components/projects/ProjectCard";

function Projects() {
  return (
    <section className="mt-24 flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-2xl">Projects</h2>
        <p>Preview and get Source Code</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <ProjectCard
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            previewUrl={item.previewUrl}
            codeUrl={item.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
