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
    const deleteProject = this.props.delProj;
    return (
      <ul className="infoList">
        {projects.map((project) => {
          return (
            <li
              className="project infoListItem"
              key={project.id}
              onMouseOver={this.handleHover}
              onMouseOut={this.handleMouseOut}
            >
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
              {this.state.isHovering && (
                <button
                  type="button"
                  onClick={deleteProject}
                  data-proj={project.id}
                >
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

class ProjectForm extends Component {
  render() {
    const {
      addProj,
      addTools,
      addStartDate,
      addEndDate,
      addProjDesc1,
      addProjDesc2,
      addProjDesc3,
      addProjDesc4,
      saveProject,
      cancel,
    } = this.props;

    return (
      <form className="projForm" onSubmit={saveProject}>
        <label htmlFor="projectName">
          Project Name:
          <input onChange={addProj} id="projectName" type={"text"} />
        </label>
        <label htmlFor="tools">
          Tools Used:
          <input
            onChange={addTools}
            id="tools"
            type={"text"}
            placeholder="React.js, uniqid "
          />
        </label>
        <label htmlFor="projStart">
          Start Date:
          <input
            onChange={addStartDate}
            id="projStart"
            type={"text"}
            placeholder="MONTH & YEAR"
          />
        </label>
        <label htmlFor="projEnd">
          Finish Date:
          <input
            onChange={addEndDate}
            id="projEnd"
            type={"text"}
            placeholder={`"Present" if not finished`}
          />
        </label>
        <label htmlFor="projDesc1">
          Project description:
          <input onChange={addProjDesc1} id="projDesc1" type={"text"} />
        </label>
        <label htmlFor="projDesc2">
          Additional project description:
          <input onChange={addProjDesc2} id="projDesc2" type={"text"} />
        </label>
        <label htmlFor="projDesc3">
          Additional project description:
          <input onChange={addProjDesc3} id="projDesc3" type={"text"} />
        </label>
        <label htmlFor="projDesc4">
          Additional project description:
          <input onChange={addProjDesc4} id="projDesc4" type={"text"} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </form>
    );
  }
}

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addProjInfo: false,
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

  handleProjectNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleToolsChange = (e) => {
    this.setState({
      toolsUsed: e.target.value,
    });
  };

  handleStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };

  handleDesc1Change = (e) => {
    this.setState({
      projDescription1: {
        text: e.target.value,
        id: uniqid(),
      },
    });
  };

  handleDesc2Change = (e) => {
    this.setState({
      projDescription2: {
        text: e.target.value,
        id: uniqid(),
      },
    });
  };

  handleDesc3Change = (e) => {
    this.setState({
      projDescription3: {
        text: e.target.value,
        id: uniqid(),
      },
    });
  };

  handleDesc4Change = (e) => {
    this.setState({
      projDescription4: {
        text: e.target.value,
        id: uniqid(),
      },
    });
  };

  addProjInfo = (e) => {
    this.setState({
      addProjInfo: true,
    });
  };

  cancelAddingInfo = (e) => {
    this.setState({
      addProjInfo: false,
    });
  };

  saveProject = (e) => {
    e.preventDefault();
    const project = {
      name: this.state.name,
      toolsUsed: this.state.toolsUsed,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      summaries: [
        this.state.projDescription1,
        this.state.projDescription2,
        this.state.projDescription3,
        this.state.projDescription4,
      ],
      id: this.state.id,
    };
    this.setState({
      addProjInfo: false,
      projects: this.state.projects.concat(project),
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
    });
  };

  projectDelete = (e) => {
    this.setState({
      projects: this.state.projects.filter((project) => {
        return project.id !== e.target.dataset.proj;
      }),
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
          <button className="addInfosBtn" onClick={this.addProjInfo}>
            +
          </button>
        )}
        <DisplayProject
          infos={this.state.projects}
          delProj={this.projectDelete}
        />
        {this.state.addProjInfo && (
          <ProjectForm
            addProj={this.handleProjectNameChange}
            addTools={this.handleToolsChange}
            addStartDate={this.handleStartDateChange}
            addEndDate={this.handleEndDateChange}
            addProjDesc1={this.handleDesc1Change}
            addProjDesc2={this.handleDesc2Change}
            addProjDesc3={this.handleDesc3Change}
            addProjDesc4={this.handleDesc4Change}
            saveProject={this.saveProject}
            cancel={this.cancelAddingInfo}
          />
        )}
      </section>
    );
  }
}

export default ProjectInfo;
