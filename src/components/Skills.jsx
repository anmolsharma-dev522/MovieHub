import React from "react";

const Skills = () => {
  return (
    <section className="skills reveal-right" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <i className="fa-brands fa-html5"></i>
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-css3-alt"></i>
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <i className="fa-brands fa-react"></i>
          <span>React</span>
        </div>

        <div className="skill-card">
          <i className="fa-brands fa-node-js"></i>
          <span>Node.js</span>
        </div>

        <div className="skill-card">
          <div className="skill-icons">
            <i className="fa-brands fa-github"></i>
          </div>

          <span>GitHub</span>
        </div>
      </div>
    </section>
  )
}

export default Skills;