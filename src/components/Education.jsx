import { educationList } from "../constants";

const Education = () => (
  <div id="education">
    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">Education</p>
    <div className="mt-4 space-y-4">
      {educationList.map((edu) => {
        const notes = [edu.content1, edu.content2].filter((note) => note && note.trim());
        return (
          <article key={edu.id} className="rounded-card border border-line bg-surface p-6 shadow-card">
            <img
              src={edu.icon}
              alt=""
              className="h-12 w-12 rounded-full border border-line bg-white object-contain"
            />
            <h3 className="mt-4 text-lg font-bold">{edu.title}</h3>
            <p className="text-sm font-medium text-body">{edu.degree}</p>
            <p className="mt-1 text-sm text-muted">{edu.duration}</p>
            {notes.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {notes.map((note) => (
                  <li key={note}>{note.trim()}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  </div>
);

export default Education;
