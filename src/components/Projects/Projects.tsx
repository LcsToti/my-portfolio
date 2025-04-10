import { projects } from "@/data/projects";
import ProjectCard from "@/components/Projects/ProjectCard";

export default function Projects() {
  return (
    <div
      className="py-20 flex flex-col items-center justify-center bg-blue-500 text-white"
      id="projects"
    >
      <h1 className="text-3xl">PROJETOS</h1>
      <br />
      <h2 className="text-xl font-light">
        Aqui estão alguns projetos que desenvolvi em equipe:
      </h2>
      <br />
      <div className="flex gap-5 flex-wrap px-20 items-center justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            stack={project.stack}
            imgs={project.imgs}
            gitRepo={project.gitRepo}
            access={project.access}
          />
        ))}
      </div>
    </div>
  );
}
