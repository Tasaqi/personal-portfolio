import React from "react";
import { aboutMe, contactCta, socialMedia } from "../constants";
import ResumeButton from "./ResumeButton";

const PRIMARY_LABELS = ["Email", "LinkedIn", "Fiverr"];

// mailto: links open the mail app; everything else opens in a new tab
const linkProps = (link) =>
  link.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" };

const Contact = () => {
  const primary = PRIMARY_LABELS.map((label) => socialMedia.find((s) => s.label === label)).filter(Boolean);

  return (
    <footer id="contactMe" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{contactCta.heading}</h2>
            <p className="mt-3 text-lg text-stone-400">{contactCta.line}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {primary.map((social, index) => (
              <a
                key={social.id}
                href={social.link}
                {...linkProps(social.link)}
                className={`inline-flex items-center gap-2 rounded-btn px-5 py-3 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-stone-700 text-white hover:border-stone-400"
                }`}
              >
                {React.createElement(social.icon, { "aria-hidden": true })}
                {social.label === "Email" ? "Email me" : social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-stone-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} {aboutMe.name}
          </p>
          <div className="flex items-center gap-5">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                aria-label={social.label}
                {...linkProps(social.link)}
                className="text-xl text-stone-400 transition-colors hover:text-white"
              >
                {React.createElement(social.icon, { "aria-hidden": true })}
              </a>
            ))}
            <ResumeButton compact />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
