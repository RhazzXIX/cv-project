import { Component } from "react";
import "../styles/ExpInfo.css";
import uniqid from "uniqid";

class ExpInfoDisplay extends Component {
  render() {
    const experiences = this.props.experiences;
    return (
      <ul>
        {experiences.map((experience) => {
          return (
            <li key={experience.experienceID}>
              <h2 className="position">{experience.position}</h2>
              <p>
                {experience.starDate} - {experience.endDate}
              </p>
              <p>{experience.companyName}</p>
              <p>{experience.workLocation}</p>
              <ul>
                {experience.workSummary.map((description) => {
                  return <li key={description.id}>{description}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

class ExpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          position: "Undergraduate Research Assistant",
          starDate: "June 2022",
          endDate: "Present",
          companyName: "Excelsior",
          workLocation: "Competence Kingdom",
          workSummary: [
            "Developing Apps that makes an impact",
            "Teaching and developing juniors to be a better developer",
            "Making sure the applications are of great quality",
          ],
          workDescription: "",
          experienceID: uniqid(),
        },
      ],
      experience: {
        position: "",
        starDate: "",
        endDate: "",
        companyName: "",
        workLocation: "",
        workSummary: [],
        workDescription: "",
        experienceID: uniqid(),
      },
    };
  }
  render() {
    return (
      <div>
        <h3 id="exp-head">EXPERIENCE</h3>
        <button id="testBtn">+</button>
        <ExpInfoDisplay experiences={this.state.experiences} />
      </div>
    );
  }
}

export default ExpInfo;
