import { Component } from "react";
import uniqid from "uniqid";

class DisplayProject extends Component {
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
    const projects = this.props.infos;
    return (
      <ul className="infoList">
        {projects.map((project) => {
          return (
            <li className="project infoListItem" key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.toolsUsed}</p>
              <p>
                {project.startDate} ~ {project.endDate}
              </p>
              <ul>
                {project.summaries.map((description) => {
                  return <li key={description.id}>{description.text}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

class ProjectForm extends Component {
  render() {
    return (
      <form className="projForm">
        <label htmlFor="projectName">
          Project Name:
          <input id="projectName" type={"text"} />
        </label>
        <label htmlFor="tools">
          Tools Used:
          <input id="tools" type={"text"} placeholder="React.js, uniqid " />
        </label>
        <label htmlFor="projStart">
          Start Date:
          <input id="projStart" type={"text"} placeholder="MONTH & YEAR" />
        </label>
        <label htmlFor="projEnd">
          Finish Date:
          <input
            id="projEnd"
            type={"text"}
            placeholder={`"Present" if not finished`}
          />
        </label>
        <label htmlFor="projDesc1">
          Project description:
          <input id="projDesc1" type={"text"} />
        </label>
        <label htmlFor="projDesc2">
          Additional project description:
          <input id="projDesc2" type={"text"} />
        </label>
        <label htmlFor="projDesc3">
          Additional project description:
          <input id="projDesc3" type={"text"} />
        </label>
        <label htmlFor="projDesc4">
          Additional project description:
          <input id="projDesc4" type={"text"} />
        </label>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    );
  }
}

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addProjInfo: true,
      projects: [
        {
          name: "Gitlytics",
          toolsUsed: "Python, Flask, React, PostgreSQL, Docker",
          startDate: "June 2020",
          endDate: "Present",
          summaries: [
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
          id: uniqid(),
        },
      ],
      name: "",
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
        <DisplayProject infos={this.state.projects} />
        {this.state.addProjInfo && <ProjectForm />}
      </section>
    );
  }
}

export default ProjectInfo;
