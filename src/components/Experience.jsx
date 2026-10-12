import { useState } from "react";
import { experiences } from "../constants";
import Section from "./Section";

const Experience = () => {
  // The first (most recent) role starts expanded
  const [openRoles, setOpenRoles] = useState(() => new Set([0]));

  const toggle = (index) =>
    setOpenRoles((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <Section id="experience" tag="Career" title="Experience">
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isOpen = openRoles.has(index);
          return (
            <article
              key={exp.organisation}
              className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="flex gap-4">
                <img
                  src={exp.logo}
                  alt=""
                  className="h-12 w-12 flex-shrink-0 rounded-full border border-line object-cover"
                />
                <div className="min-w-0 flex-1">
                  {exp.positions.map((position) => (
                    <div key={`${position.title}-${position.duration}`}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="text-lg font-bold leading-snug">
                          {position.title}{" "}
                          <span className="font-medium text-muted">
                            ·{" "}
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-700"
                            >
                              {exp.organisation}
                            </a>
                          </span>
                        </h3>
                        <p className="text-sm text-muted sm:whitespace-nowrap">{position.duration}</p>
                      </div>
                      {isOpen ? (
                        <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                          {position.content.map((item) => (
                            <p key={item.text}>{item.text}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                          {position.content[0]?.text}
                        </p>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="mt-3 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
