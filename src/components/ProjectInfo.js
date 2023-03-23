import { useState } from "react";
import uniqid from "uniqid";
import "../styles/ProjectInfo.css";

const DisplayProject = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const projects = props.infos;
  const deleteProject = props.delProj;
  return (
    <ul className="infoList">
      {projects.map((project) => {
        return (
          <li
            className="project infoListItem"
            key={project.id}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
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
            {isHovering && (
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
};

const ProjectForm = (props) => {
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
  } = props;

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
};

const ProjectInfo = () => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const [addProjInfo, setProjInfo] = useState(false);
  const [projects, setProjects] = useState([
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
  ]);

  const [name, setName] = useState("");
  const [toolsUsed, setToolsUsed] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projDescription1, setProjectDescription1] = useState({
    text: "",
    id: uniqid(),
  });
  const [projDescription2, setProjectDescription2] = useState({
    text: "",
    id: uniqid(),
  });
  const [projDescription3, setProjectDescription3] = useState({
    text: "",
    id: uniqid(),
  });
  const [projDescription4, setProjectDescription4] = useState({
    text: "",
    id: uniqid(),
  });

  const handleProjectNameChange = (e) => setName(e.target.value);

  const handleToolsChange = (e) => setToolsUsed(e.target.value);

  const handleStartDateChange = (e) => setStartDate(e.target.value);

  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleDesc1Change = (e) =>
    setProjectDescription1({
      text: e.target.value,
      id: uniqid(),
    });
  const handleDesc2Change = (e) =>
    setProjectDescription2({
      text: e.target.value,
      id: uniqid(),
    });

  const handleDesc3Change = (e) =>
    setProjectDescription3({
      text: e.target.value,
      id: uniqid(),
    });

  const handleDesc4Change = (e) =>
    setProjectDescription4({
      text: e.target.value,
      id: uniqid(),
    });

  const addProjInfos = (e) => setProjInfo(true);

  const cancelAddingInfo = (e) => setProjInfo(false);

  const resetState = () => {
    setName("");
    setToolsUsed("");
    setStartDate("");
    setEndDate("");
    setProjectDescription1({
      text: "",
      id: uniqid(),
    });
    setProjectDescription2({
      text: "",
      id: uniqid(),
    });
    setProjectDescription3({
      text: "",
      id: uniqid(),
    });
    setProjectDescription4({
      text: "",
      id: uniqid(),
    });
  };

  const saveProject = (e) => {
    e.preventDefault();
    const project = {
      name,
      toolsUsed,
      startDate,
      endDate,
      summaries: [
        projDescription1,
        projDescription2,
        projDescription3,
        projDescription4,
      ],
      id: uniqid(),
    };

    setProjects(projects.concat(project));
    resetState();
    setProjInfo(false);
  };

  const projectDelete = (e) => {
    setProjects(
      projects.filter((project) => {
        return project.id !== e.target.dataset.proj;
      })
    );
  };

  return (
    <section
      id="projectInfo"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <h3 id="proj-head">PROJECTS</h3>
      {isHovering && (
        <button className="addInfosBtn" onClick={addProjInfos}>
          +
        </button>
      )}
      <DisplayProject infos={projects} delProj={projectDelete} />
      {addProjInfo && (
        <ProjectForm
          addProj={handleProjectNameChange}
          addTools={handleToolsChange}
          addStartDate={handleStartDateChange}
          addEndDate={handleEndDateChange}
          addProjDesc1={handleDesc1Change}
          addProjDesc2={handleDesc2Change}
          addProjDesc3={handleDesc3Change}
          addProjDesc4={handleDesc4Change}
          saveProject={saveProject}
          cancel={cancelAddingInfo}
        />
      )}
    </section>
  );
};

export default ProjectInfo;
