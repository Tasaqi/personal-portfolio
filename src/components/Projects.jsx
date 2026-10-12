import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../constants";
import Section from "./Section";
import Chip from "./Chip";

const VISIBLE_COUNT = 3;

const ProjectLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-brand-700 hover:underline"
  >
    {children}
    <HiArrowUpRight aria-hidden="true" />
  </a>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <Section id="work" tag="Selected work" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={project.image}
                alt=""
                className="h-10 w-10 flex-shrink-0 rounded-full border border-line object-cover"
              />
              <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.content}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Chip key={tech.id} icon={tech.icon}>
                  {tech.name}
                </Chip>
              ))}
            </div>
            {(project.link || project.github) && (
              <div className="mt-5 flex gap-5 text-sm font-semibold">
                {project.link && <ProjectLink href={project.link}>Live</ProjectLink>}
                {project.github && <ProjectLink href={project.github}>GitHub</ProjectLink>}
              </div>
            )}
          </article>
        ))}
      </div>

      {projects.length > VISIBLE_COUNT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="rounded-btn border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
