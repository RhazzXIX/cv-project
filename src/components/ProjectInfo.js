import { Component } from "react";
import uniqid from "uniqid";

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addEduProjInfo: false,
      projects: [
        {
          projectName: "Gitlytics",
          toolsUsed: "Python, Flask, React, PostgreSQL, Docker",
          startDate: "June 2020",
          endDate: "Present",
          projectDescriptions: [
            {
              text: "Developed a full-stack web application using with Flask serving a REST API with React as the frontend",
              id: uniqid(),
            },
            {
              text: "Implemented Github OAuth to get data from user's repositories",
              id: uniqid(),
            },
            {
              text: "Visualized GitHub data to show collaboration",
              id: uniqid(),
            },
            {
              text: "Used Celery and Redis for asynchronous tasks",
              id: uniqid(),
            },
          ],
        },
      ],
      projectName: "",
      toolsUsed: "",
      startDate: "",
      endDate: "",
      projDescription1: {
        text: "",
        id: uniqid(),
      },
      projDescription2: {
        text: "",
        id: uniqid(),
      },
      projDescription3: {
        text: "",
        id: uniqid(),
      },
      projDescription4: {
        text: "",
        id: uniqid(),
      },
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
