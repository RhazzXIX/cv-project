import { Component } from "react";
import uniqid from "uniqid";

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

    return (
      <ul>
        {EducationInfos.map((edu) => {
          return (
            <li
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
              {this.state.isHovering && <button data-edu={edu.id}>Del</button>}
            </li>
          );
        })}
      </ul>
    );
  }
}

class EducationForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="schoolName">
          School Name:
          <input type={"text"} id="schoolName" />
        </label>
        <label htmlFor="schoolLoc">
          School Location:
          <input type={"text"} id="schoolLoc" />
        </label>
        <label htmlFor="course">
          Course Taken:
          <input type={"text"} id="course" />
        </label>
        <label htmlFor="eduStartDate">
          Start Date:
          <input type={"text"} id="eduStartDate" />
        </label>
        <label htmlFor="eduEndDate">
          End Date:
          <input type={"text"} id="eduEndDate" />
        </label>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
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
        <DisplayEducationInfos infos={this.state.educationInfos} />
        {this.state.addEduInfo && <EducationForm />}
      </section>
    );
  }
}

export default EducationInfo;
