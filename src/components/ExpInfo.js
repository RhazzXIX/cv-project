import { useState, Component } from "react";
import "../styles/ExpInfo.css";
import uniqid from "uniqid";

const ExpInfoDisplay = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const experiences = props.experiences;
  const deleteExp = props.deleteExp;
  return (
    <ul className="infoList">
      {experiences.map((experience) => {
        return (
          <li
            className="experience infoListItem"
            key={experience.experienceID}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            <h2 className="title">{experience.title}</h2>
            <p>
              {experience.startDate} ~ {experience.endDate}
            </p>
            <p>{experience.companyName}</p>
            <p>{experience.workLocation}</p>
            <ul>
              {experience.workSummary.map((description) => {
                return <li key={description.id}>{description.text}</li>;
              })}
            </ul>
            {isHovering && (
              <button onClick={deleteExp} data-exp={experience.experienceID}>
                Del
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const ExpInfoForm = (props) => {
  const {
    addTitle,
    addStartDate,
    addEndDate,
    addCompany,
    addWorkLoc,
    addWorkDesc1,
    addWorkDesc2,
    addWorkDesc3,
    saveInfo,
    cancel,
  } = props;

  return (
    <form id="expForm" onSubmit={saveInfo}>
      <label htmlFor="workTitle">
        Title:
        <input id="workTitle" type={"text"} onChange={addTitle} />
      </label>
      <label htmlFor="expStartDate">
        Start date:
        <input
          id="expStartDate"
          type={"text"}
          placeholder="Month & Year"
          onChange={addStartDate}
        />
      </label>
      <label htmlFor="expEndDate">
        End date:
        <input
          id="expEndDate"
          type={"text"}
          placeholder="Month & Year || Present if still working"
          onChange={addEndDate}
        />
      </label>
      <label htmlFor="companyName">
        Company name:
        <input id="companyName" type={"text"} onChange={addCompany} />
      </label>
      <label htmlFor="workLoc">
        Work location:
        <input id="workLoc" type={"text"} onChange={addWorkLoc} />
      </label>
      <label htmlFor="desc1">
        Work description:
        <input id="desc1" type={"text"} onChange={addWorkDesc1} />
      </label>
      <label htmlFor="desc2">
        Additional work description:
        <input id="desc2" type={"text"} onChange={addWorkDesc2} />
      </label>
      <label htmlFor="desc3">
        Additional work description:
        <input id="desc3" type={"text"} onChange={addWorkDesc3} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
    </form>
  );
};

const ExpInfo = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };
  const [addInfo, setAddInfo] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      title: "Undergraduate Research Assistant",
      startDate: "June 2022",
      endDate: "Present",
      companyName: "Excelsior",
      workLocation: "Competence Kingdom",
      workSummary: [
        {
          text: "Developing Apps that makes an impact",
          id: uniqid(),
        },
        {
          text: "Teaching and developing juniors to be a better developer",
          id: uniqid(),
        },
        {
          text: "Making sure the applications are of great quality",
          id: uniqid(),
        },
      ],
      experienceID: uniqid(),
    },
  ]);

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [workDescription1, setWorkDescription1] = useState({
    text: "",
    key: uniqid(),
  });
  const [workDescription2, setWorkDescription2] = useState({
    text: "",
    key: uniqid(),
  });
  const [workDescription3, setWorkDescription3] = useState({
    text: "",
    key: uniqid(),
  });
  const [experienceID, setExpID] = useState(uniqid());

  const handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);

  const handleWorkLocationChange = (e) => setWorkLocation(e.target.value);

  const handleWorkDescription1Change = (e) =>
    setWorkDescription1({
      text: e.target.value,
      id: uniqid(),
    });

  const handleWorkDescription2Change = (e) => {
    setWorkDescription2({
      text: e.target.value,
      id: uniqid(),
    });
  };

  const handleWorkDescription3Change = (e) => {
    setWorkDescription3({
      text: e.target.value,
      id: uniqid(),
    });
  };

  const resetState = () => {
    setStartDate("");
    setEndDate("");
    setCompanyName("");
    setWorkLocation("");
    setWorkDescription1({
      text: "",
      id: uniqid(),
    });
    setWorkDescription2({
      text: "",
      id: uniqid(),
    });
    setWorkDescription3({
      text: "",
      id: uniqid(),
    });
  };

  const handleSaveExperience = (e) => {
    e.preventDefault();
    const experience = {
      title,
      startDate,
      endDate,
      companyName,
      workLocation,
      workSummary: [workDescription1, workDescription2, workDescription3],
      experienceID,
    };

    setExperiences(experiences.concat(experience));
    resetState();
  };

  const addExpInfo = (e) => setAddInfo(true);

  const cancelEdit = (e) => setAddInfo(false);

  const deleteExperience = (e) => {
    setExperiences(
      experiences.filter((experience) => {
        return experience.experienceID !== e.target.dataset.exp;
      })
    );
  };

  return (
    <section
      id="experience-info"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <h3 id="exp-head">EXPERIENCE</h3>
      {isHovering && (
        <button className="addInfosBtn" onClick={addExpInfo}>
          +
        </button>
      )}
      <ExpInfoDisplay experiences={experiences} deleteExp={deleteExperience} />
      {addInfo && (
        <ExpInfoForm
          addTitle={handleTitleChange}
          addStartDate={handleStartDateChange}
          addEndDate={handleEndDateChange}
          addCompany={handleCompanyNameChange}
          addWorkLoc={handleWorkLocationChange}
          addWorkDesc1={handleWorkDescription1Change}
          addWorkDesc2={handleWorkDescription2Change}
          addWorkDesc3={handleWorkDescription3Change}
          saveInfo={handleSaveExperience}
          cancel={cancelEdit}
        />
      )}
    </section>
  );
};

export default ExpInfo;
