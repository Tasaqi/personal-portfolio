import { skills } from "../constants";
import Section from "./Section";
import Chip from "./Chip";
import Education from "./Education";

const Skills = () => (
  <Section id="skills" tag="Toolbox" title="Skills">
    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item.id} icon={item.icon}>
                  {item.name}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Education />
    </div>
  </Section>
);

export default Skills;
