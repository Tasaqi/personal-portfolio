import { AiFillFilePdf } from "react-icons/ai";
import { resumeLink } from "../constants";

// Highlighted, animated link to the resume PDF (see .resume-cta in index.css)
const ResumeButton = ({ compact = false }) => (
  <a
    href={resumeLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`resume-cta inline-flex items-center gap-2 rounded-full bg-brand-600 font-semibold text-white transition-colors hover:bg-brand-700 ${
      compact ? "px-3.5 py-1.5 text-sm" : "px-5 py-3 text-sm"
    }`}
  >
    <AiFillFilePdf className="text-base" aria-hidden="true" />
    Resume
  </a>
);

export default ResumeButton;
