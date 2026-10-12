import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { claudeBanner } from "../constants";
import Section from "./Section";
import Chip from "./Chip";

const CaseStudy = () => {
  const caseStudy = claudeBanner.caseStudy;

  return (
    <Section id="case-study" tag={`Featured case study · ${claudeBanner.eyebrow}`}>
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {caseStudy.title}, built end to end in{" "}
            <span className="text-brand-600">{caseStudy.duration}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{caseStudy.summary}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{caseStudy.workflow}</p>
          <a
            href={caseStudy.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            View live site
            <HiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-card border border-line bg-surface p-6 shadow-card">
          <p className="font-display font-bold text-ink">Built with Claude Code</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{claudeBanner.content}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {claudeBanner.skills.map((skill) => (
              <Chip key={skill.id} icon={skill.icon}>
                {skill.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudy.scope.map((area) => (
          <div key={area.id} className="rounded-card border border-line bg-surface p-5">
            <p className="flex items-center gap-2 font-display font-bold text-ink">
              {React.createElement(area.icon, { className: "text-brand-600", "aria-hidden": true })}
              {area.title}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudy;
