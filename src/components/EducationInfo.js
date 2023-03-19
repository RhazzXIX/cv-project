import { Component } from "react";
import uniqid from "uniqid";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: true,
      addEduInfo: false,
      educationInfos: [
        {
          name: "Southwestern University",
          location: "Georgetown, TX",
          course: "Bachelor of Arts in Computer Science, Minor in Business",
          startDate: "Aug. 2018",
          endDate: "May 2021",
          id: uniqid(),
        },
      ],
      name: "",
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
        <h3 id="edu-head">Education</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addEduInfo}>
            +
          </button>
        )}
      </section>
    );
  }
}

export default EducationInfo;
