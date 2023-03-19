import { Component } from "react";
import uniqid from "uniqid";
import "../styles/TechSkillsInfo.css";

const SkillsForm = (props) => {
  console.log(props);
  const { addSkill, addTools, saveSkill, cancel } = props;
  return (
    <form className="skillForm" onSubmit={saveSkill}>
      <label htmlFor="techSkill">
        Technical Skill:
        <input
          onChange={addSkill}
          type={"text"}
          id={"techSkill"}
          placeholder={"E.g., Languages, Frameworks, Developer Tools"}
        />
      </label>
      <label htmlFor="techTools">
        Technical Tools Used:
        <input
          onChange={addTools}
          type={"text"}
          id="techTools"
          placeholder="Programs/Tools used for the above skill e.g., JavaScript, React, Git, VS Code"
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
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
    const delSkill = this.props.delSkill;
    return (
      <ul className="infoList">
        {techs.map((tech) => {
          return (
            <li
              className="skills infoListItem"
              key={tech.id}
              onMouseOver={this.handleHover}
              onMouseOut={this.handleMouseOut}
            >
              <h2>{tech.skill}:</h2>
              <p>{tech.tools}</p>
              {this.state.isHovering && (
                <button type="button" onClick={delSkill} data-skill={tech.id}>
                  Del
                </button>
              )}
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
      addSkill: false,
      techs: [
        {
          skill: "Languages",
          tools: "HTML/CSS, Javascript",
          id: uniqid(),
        },
      ],
      skill: "",
      tools: "",
      id: uniqid(),
    };
  }

  handleSkillChange = (e) => {
    this.setState({
      skill: e.target.value,
    });
  };

  handleToolChange = (e) => {
    this.setState({
      tools: e.target.value,
    });
  };

  saveSkill = (e) => {
    e.preventDefault();
    const tech = {
      skill: this.state.skill,
      tools: this.state.tools,
      id: this.state.id,
    };

    this.setState({
      addSkill: false,
      techs: this.state.techs.concat(tech),
      skill: "",
      tools: "",
      id: uniqid(),
    });
  };

  cancelAddSkill = (e) => {
    this.setState({
      addSkill: false,
    });
  };

  addSkillInfo = (e) => {
    this.setState({
      addSkill: true,
    });
  };

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

  deleteSkill = (e) => {
    this.setState({
      techs: this.state.techs.filter((skill) => {
        return skill.id !== e.target.dataset.skill;
      }),
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
          <button className="addInfosBtn" onClick={this.addSkillInfo}>
            +
          </button>
        )}
        <DisplaySkills techs={this.state.techs} delSkill={this.deleteSkill} />
        {this.state.addSkill && (
          <SkillsForm
            addSkill={this.handleSkillChange}
            addTools={this.handleToolChange}
            saveSkill={this.saveSkill}
            cancel={this.cancelAddSkill}
          />
        )}
      </section>
    );
  }
}

export default TechSkillsInfo;
