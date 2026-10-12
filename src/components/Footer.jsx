import React from "react";
import ResumeButton from "./ResumeButton";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-6 xl:max-w-[1280px] w-full mx-auto py-8">
      <div className="flex sm:flex-row flex-col sm:items-center gap-5">
        <img
          src={profilePic}
          alt={aboutMe.name}
          className="w-[156px] h-[156px] flex-shrink-0 border-2 border-teal-200 rounded-full"
        />
        <div>
          <h2 className="font-poppins font-semibold text-[24px] leading-[32px] text-gradient">
            {aboutMe.name}
          </h2>
          <p className="font-poppins font-medium text-white text-[16px] leading-[24px]">
            {aboutMe.tagLine.split(" | ")[0]}
          </p>
          <p className="font-poppins text-dimWhite text-[14px] leading-[24px] mt-1 max-w-[600px]">
            {aboutMe.tagLine
              .replace(/\.$/, "")
              .split(" | ")
              .slice(1)
              .map((phrase, index, phrases) => (
                <React.Fragment key={phrase}>
                  <span className="whitespace-nowrap">
                    {phrase}
                    {index < phrases.length - 1 && (
                      <span className="text-teal-200 mx-2">·</span>
                    )}
                  </span>{" "}
                </React.Fragment>
              ))}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:items-center items-start gap-4 flex-shrink-0">
        <ResumeButton />
        <div className="flex flex-row">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 last:mr-0 text-[22px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="xl:max-w-[1280px] w-full mx-auto border-t border-gray-800 py-4 text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm">
      <p>Powered by Tanveer Ahmad</p>
    </div>
  </footer>
);

export default Footer;
