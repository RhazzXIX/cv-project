import { useState } from "react";
import uniqid from "uniqid";
import "../styles/EducationInfo.css";

const DisplayEducationInfos = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const EducationInfos = props.infos;
  const deleteInfo = props.delInfo;

  return (
    <ul className="infoList">
      {EducationInfos.map((edu) => {
        return (
          <li
            className="education infoListItem"
            key={edu.id}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            <h2>{edu.schoolName}</h2>
            <p>{edu.location}</p>
            <p>{edu.field}</p>
            <p>
              {edu.startDate} ~ {edu.endDate}
            </p>
            {isHovering && (
              <button data-edu={edu.id} onClick={deleteInfo}>
                Del
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const EducationForm = (props) => {
  const {
    addSchool,
    addLocation,
    addField,
    addStartDate,
    addEndDate,
    saveInfo,
    cancel,
  } = props;
  return (
    <form className="eduForm" onSubmit={saveInfo}>
      <label htmlFor="schoolName">
        School Name:
        <input type={"text"} id="schoolName" onChange={addSchool} />
      </label>
      <label htmlFor="schoolLoc">
        School Location:
        <input type={"text"} id="schoolLoc" onChange={addLocation} />
      </label>
      <label htmlFor="field">
        Field Taken:
        <input type={"text"} id="field" onChange={addField} />
      </label>
      <label htmlFor="eduStartDate">
        Start Date:
        <input type={"text"} id="eduStartDate" onChange={addStartDate} />
      </label>
      <label htmlFor="eduEndDate">
        End Date:
        <input type={"text"} id="eduEndDate" onChange={addEndDate} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
    </form>
  );
};

const EducationInfo = () => {
  const [isHovering, setHovering] = useState(false);
  const [addEduInfo, setAddEduInfo] = useState(false);
  const [educationInfos, setEducationInfos] = useState([
    {
      schoolName: "Southwestern University",
      location: "Georgetown, TX",
      field: "Bachelor of Arts in Computer Science, Minor in Business",
      startDate: "Aug. 2018",
      endDate: "May 2021",
      id: uniqid(),
    },
  ]);
  const [schoolName, setSchoolName] = useState("");
  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [id, setId] = useState(uniqid());

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleAddEduInfo = (e) => {
    setAddEduInfo(true);
  };

  const cancelAddInfo = (e) => {
    setAddEduInfo(false);
  };

  const reset = () => {
    setSchoolName("");
    setLocation("");
    setField("");
    setStartDate("");
    setEndDate("");
    setId(uniqid());
  };

  const saveEduInfo = (e) => {
    e.preventDefault();
    const education = {
      schoolName,
      location,
      field,
      startDate,
      endDate,
      id,
    };
    console.log(education);

    setEducationInfos(educationInfos.concat(education));
    console.log(educationInfos);
    reset();
    setAddEduInfo(false);
  };

  const deleteEduInfo = (e) => {
    setEducationInfos(
      educationInfos.filter((info) => {
        return info.id !== e.target.dataset.edu;
      })
    );
  };

  return (
    <section
      id="educationInfo"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <h3 id="edu-head">EDUCATION</h3>
      {isHovering && (
        <button className="addInfosBtn" onClick={handleAddEduInfo}>
          +
        </button>
      )}
      <DisplayEducationInfos infos={educationInfos} delInfo={deleteEduInfo} />
      {addEduInfo && (
        <EducationForm
          saveInfo={saveEduInfo}
          addSchool={handleSchoolNameChange}
          addLocation={handleLocationChange}
          addField={handleFieldChange}
          addStartDate={handleStartDateChange}
          addEndDate={handleEndDateChange}
          cancel={cancelAddInfo}
        />
      )}
    </section>
  );
};

export default EducationInfo;
