import { Component } from "react";

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addEduProjInfo: false,
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
        id="projectInfo"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <h3 id="proj-head">PROJECTS</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addEduInfo}>
            +
          </button>
        )}
      </section>
    );
  }
}

export default ProjectInfo;
