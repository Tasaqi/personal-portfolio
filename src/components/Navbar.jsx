import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { aboutMe, navLinks } from "../constants";
import { logoMark } from "../assets";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-canvas/90 backdrop-blur" : "border-transparent bg-canvas"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${aboutMe.name}, back to top`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-ink p-1.5">
            <img src={logoMark} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="hidden font-display text-base font-extrabold text-ink sm:inline">
            {aboutMe.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.id}`} className="transition-colors hover:text-ink">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton compact />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ResumeButton compact />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-btn p-2 text-2xl text-ink hover:bg-chip"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 py-3 md:hidden">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-btn px-3 py-2.5 text-base font-medium text-body hover:bg-chip"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
