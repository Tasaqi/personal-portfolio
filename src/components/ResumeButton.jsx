import { AiFillFilePdf } from "react-icons/ai";
import { resumeLink } from "../constants";

// Highlighted, animated link to the resume PDF (see .resume-cta in index.css)
const ResumeButton = ({ compact = false }) => (
  <a
    href={resumeLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`resume-cta inline-flex items-center gap-2 rounded-full bg-blue-gradient font-poppins font-semibold text-primary transition-transform duration-300 hover:scale-105 ${
      compact ? "px-4 py-1.5 text-[14px]" : "px-5 py-2 text-[15px]"
    }`}
  >
    <AiFillFilePdf className="text-[18px]" />
    Resume
  </a>
);

export default ResumeButton;
