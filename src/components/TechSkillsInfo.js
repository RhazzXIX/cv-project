import { useState } from "react";
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

const DisplaySkills = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const techs = props.techs;
  const delSkill = props.delSkill;

  return (
    <ul className="infoList">
      {techs.map((tech) => {
        return (
          <li
            className="skills infoListItem"
            key={tech.id}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            <h2>{tech.skill}:</h2>
            <p>{tech.tools}</p>
            {isHovering && (
              <button type="button" onClick={delSkill} data-skill={tech.id}>
                Del
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const TechSkillsInfo = () => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const [addSkill, setAddSkill] = useState(false);
  const [techs, setTechs] = useState([
    {
      skill: "Languages",
      tools: "HTML/CSS, Javascript",
      id: uniqid(),
    },
  ]);
  const [skill, setSkill] = useState("");
  const [tools, setTools] = useState("");

  const handleSkillChange = (e) => setSkill(e.target.value);

  const handleToolChange = (e) => setTools(e.target.value);

  const resetState = () => {
    setSkill("");
    setTools("");
    setAddSkill(false);
  };

  const saveSkill = (e) => {
    e.preventDefault();
    const tech = {
      skill,
      tools,
      id: uniqid(),
    };

    setTechs(techs.concat(tech));
    resetState();
  };

  const cancelAddSkill = (e) => setAddSkill(false);

  const addSkillInfo = (e) => setAddSkill(true);

  const deleteSkill = (e) =>
    setTechs(
      techs.filter((skill) => {
        return skill.id !== e.target.dataset.skill;
      })
    );

  return (
    <section
      id="skillsInfo"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <h3 id="skills-head">TECHNICAL SKILLS</h3>
      {isHovering && (
        <button className="addInfosBtn" onClick={addSkillInfo}>
          +
        </button>
      )}
      <DisplaySkills techs={techs} delSkill={deleteSkill} />
      {addSkill && (
        <SkillsForm
          addSkill={handleSkillChange}
          addTools={handleToolChange}
          saveSkill={saveSkill}
          cancel={cancelAddSkill}
        />
      )}
    </section>
  );
};

export default TechSkillsInfo;
