import React from "react";
import { motion } from "framer-motion";
import { SiAnthropic } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { claudeBanner } from "../constants";

const CaseStudy = ({ caseStudy }) => (
  <div className="mt-10 pt-8 border-t border-gray-800">
    <div className="flex md:flex-row flex-col md:items-end md:justify-between gap-4">
      <div className="max-w-[640px]">
        <p className="font-poppins text-[14px] text-dimWhite uppercase tracking-wider">
          Case study
        </p>
        <h3 className="font-poppins font-semibold ss:text-[32px] text-[26px] leading-[40px] text-white mt-1">
          <a
            href={caseStudy.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-200"
          >
            {caseStudy.title}
          </a>
          {", built end to end in "}
          <span className="text-gradient whitespace-nowrap">
            {caseStudy.duration}
          </span>
        </h3>
        <p className="font-poppins text-dimWhite text-[16px] leading-[28px] mt-3">
          {caseStudy.summary}
        </p>
      </div>
      <div className="flex flex-col items-start md:max-w-[340px]">
        <a
          href={caseStudy.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-5 px-5 py-2.5 rounded-full border border-teal-200 font-poppins text-[15px] text-teal-200 transition-colors duration-300 hover:bg-teal-200 hover:text-primary"
        >
          View live site
          <span className="opacity-70 text-[13px]">
            {caseStudy.link.replace(/^https?:\/\//, "")}
          </span>
          <BsArrowUpRight />
        </a>
        <p className="font-poppins text-dimWhite text-[14px] leading-[24px]">
          {caseStudy.workflow}
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-4 ss:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {caseStudy.scope.map((area) => (
        <div
          key={area.id}
          className="feature-card rounded-[16px] border border-gray-800 px-5 py-5 transition-colors duration-300 hover:border-transparent group"
        >
          <p className="flex items-center gap-2 font-poppins text-white text-[18px]">
            <span className="text-[22px] group-hover:text-teal-200">
              {React.createElement(area.icon)}
            </span>
            {area.title}
          </p>
          <ul className="mt-3 space-y-2">
            {area.items.map((item) => (
              <li
                key={item}
                className="font-poppins text-dimWhite text-[13px] leading-[20px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const ClaudeBanner = () => {
  return (
    <motion.section
      id="claude"
      className="mb-10 pt-8 pb-10 border-y border-gray-800"
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex md:flex-row flex-col md:items-center gap-10">
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
      </div>

      {claudeBanner.caseStudy && <CaseStudy caseStudy={claudeBanner.caseStudy} />}
    </motion.section>
  );
};

export default ClaudeBanner;
