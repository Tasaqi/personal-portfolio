import React from "react";
import { motion } from "framer-motion";
import { SiAnthropic } from "react-icons/si";
import { claudeBanner } from "../constants";

const ClaudeBanner = () => {
  return (
    <motion.section
      id="claude"
      className="mb-10 pt-8 pb-10 border-y border-gray-800 flex md:flex-row flex-col md:items-center gap-10"
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1">
        <p className="flex items-center gap-2 font-poppins text-[16px] text-dimWhite">
          <SiAnthropic className="text-teal-200" />
          {claudeBanner.eyebrow}
        </p>
        <h2 className="font-poppins font-semibold ss:text-[44px] text-[32px] ss:leading-[56px] leading-[42px] text-white mt-2">
          Building faster with{" "}
          <span className="text-gradient">Claude Code</span>
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[28px] mt-4 max-w-[520px]">
          {claudeBanner.content}
        </p>
      </div>

      <div className="flex-1 grid ss:grid-cols-4 grid-cols-2 gap-3">
        {claudeBanner.skills.map((skill) => (
          <div
            key={skill.id}
            className="feature-card flex flex-col items-center justify-center text-center gap-2 rounded-[16px] border border-gray-800 px-3 py-5 transition-colors duration-300 hover:border-transparent group"
          >
            <span className="text-white text-[26px] group-hover:text-teal-200">
              {React.createElement(skill.icon)}
            </span>
            <p className="font-poppins text-dimWhite text-[12px] leading-[16px]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ClaudeBanner;
