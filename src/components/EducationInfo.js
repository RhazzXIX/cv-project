import { Component } from "react";
import uniqid from "uniqid";
import "../styles/EducationInfo.css";

class DisplayEducationInfos extends Component {
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
    const EducationInfos = this.props.infos;
    const deleteInfo = this.props.delInfo;

    return (
      <ul className="infoList">
        {EducationInfos.map((edu) => {
          return (
            <li
              className="education infoListItem"
              key={edu.id}
              onMouseOver={this.handleHover}
              onMouseOut={this.handleMouseOut}
            >
              <h2>{edu.schoolName}</h2>
              <p>{edu.location}</p>
              <p>{edu.course}</p>
              <p>
                {edu.startDate} ~ {edu.endDate}
              </p>
              {this.state.isHovering && (
                <button data-edu={edu.id} onClick={deleteInfo}>
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

class EducationForm extends Component {
  render() {
    const {
      addSchool,
      addLocation,
      addCourse,
      addStartDate,
      addEndDate,
      saveInfo,
      cancel,
    } = this.props;
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
        <label htmlFor="course">
          Course Taken:
          <input type={"text"} id="course" onChange={addCourse} />
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
  }
}

class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addEduInfo: false,
      educationInfos: [
        {
          schoolName: "Southwestern University",
          location: "Georgetown, TX",
          course: "Bachelor of Arts in Computer Science, Minor in Business",
          startDate: "Aug. 2018",
          endDate: "May 2021",
          id: uniqid(),
        },
      ],
      schoolName: "",
      location: "",
      course: "",
      startDate: "",
      endDate: "",
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

  handleSchoolNameChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleCourseChange = (e) => {
    this.setState({
      course: e.target.value,
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

  addEduInfo = (e) => {
    this.setState({
      addEduInfo: true,
    });
  };

  cancelAddInfo = (e) => {
    this.setState({
      addEduInfo: false,
    });
  };

  saveEduInfo = (e) => {
    e.preventDefault();
    const education = {
      schoolName: this.state.schoolName,
      location: this.state.location,
      course: this.state.course,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      id: this.state.id,
    };

    this.setState({
      addEduInfo: false,
      educationInfos: this.state.educationInfos.concat(education),
      schoolName: "",
      location: "",
      course: "",
      startDate: "",
      endDate: "",
      id: uniqid(),
    });
  };

  deleteEduInfo = (e) => {
    this.setState({
      educationInfos: this.state.educationInfos.filter((info) => {
        return info.id !== e.target.dataset.edu;
      }),
    });
  };

  render() {
    return (
      <section
        id="educationInfo"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <h3 id="edu-head">EDUCATION</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addEduInfo}>
            +
          </button>
        )}
        <DisplayEducationInfos
          infos={this.state.educationInfos}
          delInfo={this.deleteEduInfo}
        />
        {this.state.addEduInfo && (
          <EducationForm
            saveInfo={this.saveEduInfo}
            addSchool={this.handleSchoolNameChange}
            addLocation={this.handleLocationChange}
            addCourse={this.handleCourseChange}
            addStartDate={this.handleStartDateChange}
            addEndDate={this.handleEndDateChange}
            cancel={this.cancelAddInfo}
          />
        )}
      </section>
    );
  }
}

export default EducationInfo;
