import { Component } from "react";
import uniqid from "uniqid";

class TechSkillsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      skills: [
        {
          skill: "Languages",
          tool: "HTML/CSS, Javascript",
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
      </section>
    );
  }
}

export default TechSkillsInfo;
