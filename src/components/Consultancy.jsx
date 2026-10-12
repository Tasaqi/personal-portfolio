import { HiArrowUpRight } from "react-icons/hi2";
import { achievements } from "../constants";
import Section from "./Section";

// "Kifwat immo" -> "KI", "TicketDeck" -> "TI"; used instead of the placeholder icons in the data
const initials = (name) => {
  const words = name.trim().split(/\s+/);
  const letters = words.length > 1 ? words.map((word) => word[0]).join("") : words[0].slice(0, 2);
  return letters.slice(0, 2).toUpperCase();
};

const Consultancy = () => (
  <Section id="consultancy" tag="Client work" title="Consultancy Experience">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((client) => {
        const lines = [client.content1, client.content2, client.content3].filter(
          (line) => line && line.trim()
        );
        return (
          <article
            key={client.id}
            className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700"
                aria-hidden="true"
              >
                {initials(client.event)}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight">{client.event}</h3>
                <p className="text-sm font-medium text-brand-700">{client.position}</p>
              </div>
            </div>
            <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-brand-600" aria-hidden="true">
                    ▹
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            {client.project && (
              <a
                href={client.project}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                Visit site
                <HiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </article>
        );
      })}
    </div>
  </Section>
);

export default Consultancy;
