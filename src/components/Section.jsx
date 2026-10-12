import { motion, useReducedMotion } from "framer-motion";

// Shared wrapper: anchor id, small uppercase tag, heading and a fade-up on first view
const Section = ({ id, tag, title, className = "", children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`border-t border-line py-16 sm:py-20 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {tag && (
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">
            {tag}
          </p>
        )}
        {title && <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>}
        <div className={title ? "mt-8" : "mt-3"}>{children}</div>
      </motion.div>
    </section>
  );
};

export default Section;
