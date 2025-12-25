import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  const groups = techStack.groupedSoftwareSkills || [];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container" id="skills">
        <div className="skills-bar">
          <h1 className="skills-heading">{techStack.title || "Skills"}</h1>
          {techStack.subTitle ? (
            <p className="subTitle skills-subtitle">{techStack.subTitle}</p>
          ) : null}

          <div className="skills-bar-content">
            {groups.map((group, idx) => (
              <div key={idx} className="skills-group">
                <h2 className="skills-group-title">{group.title}</h2>
                <SoftwareSkill skills={group.skills} />
              </div>
            ))}
          </div>
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Fade>
  );
}
