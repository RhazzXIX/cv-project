import { Component } from "react";
import uniqid from "uniqid";

const SkillsForm = (props) => {
  return (
    <form className="skillForm">
      <label htmlFor="techSkill">
        Technical Skill:
        <input
          type={"text"}
          id={"techSkill"}
          placeholder={"E.g., Languages, Frameworks, Developer Tools"}
        />
      </label>
      <label htmlFor="techTools">
        Technical Tools Used:
        <input
          type={"text"}
          id="techTools"
          placeholder="Programs/Tools used for the above skill e.g., JavaScript, React, Git, VS Code"
        />
      </label>
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </form>
  );
};

class DisplaySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleHover = (e) => {
    this.setState({
      isHovering: true,
    });
  };

  handleMouseOut = (e) => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    const techs = this.props.techs;
    return (
      <ul>
        {techs.map((tech) => {
          return (
            <li key={tech.id}>
              <h2>{tech.skill}:</h2>
              <p>{tech.tools}</p>
              <button type="button">Del</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

class TechSkillsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addSkill: true,
      techs: [
        {
          skill: "Languages",
          tools: "HTML/CSS, Javascript",
          id: uniqid(),
        },
      ],
      skill: "",
      tool: "",
      id: uniqid(),
    };
  }

  handleHover = (e) => {
    this.setState({
      isHovering: true,
    });
  };

  handleMouseOut = (e) => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    return (
      <section
        id="skillsInfo"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <h3 id="skills-head">TECHNICAL SKILLS</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addProjInfo}>
            +
          </button>
        )}
        <DisplaySkills techs={this.state.techs} />
        {this.state.addSkill && <SkillsForm />}
      </section>
    );
  }
}

export default TechSkillsInfo;
