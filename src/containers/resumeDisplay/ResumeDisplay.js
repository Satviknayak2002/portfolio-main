import React, {useContext} from "react";
import "./ResumeDisplay.scss";
import {resumeDisplay} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ResumeDisplay() {
  function openResumeInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!resumeDisplay.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="resume">
        <div>
          <h1 className="skills-heading">{resumeDisplay.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode resume-subtitle"
                : "subTitle resume-subtitle"
            }
          >
            {resumeDisplay.subtitle}
          </p>

          <div className="resume-container">
            {resumeDisplay.items.map((item, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode resume-card resume-card-dark"
                      : "resume-card resume-card-light"
                  }
                  onClick={() => openResumeInNewTab(item.link)}
                  style={{cursor: "pointer"}}
                >
                  {item.image ? (
                    <div className="resume-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="resume-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {item.name}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
