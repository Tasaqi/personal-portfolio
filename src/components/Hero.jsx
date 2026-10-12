import { HiArrowRight } from "react-icons/hi";
import { aboutMe, hero } from "../constants";
import { profilePic } from "../assets";
import ResumeButton from "./ResumeButton";

const Hero = () => (
  <section id="home" className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 md:pb-20">
    <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
      <div className="order-2 md:order-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
          {hero.badge}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-brand-600">{aboutMe.name}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{aboutMe.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contactMe"
            className="inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            {hero.cta}
            <HiArrowRight aria-hidden="true" />
          </a>
          <ResumeButton />
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2">
        <img
          src={profilePic}
          alt={aboutMe.name}
          className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-photo sm:h-60 sm:w-60 md:h-72 md:w-72"
        />
      </div>
    </div>
  </section>
);

export default Hero;
