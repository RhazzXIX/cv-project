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
                {experience.starDate} ~ {experience.endDate}
              </p>
              <p>{experience.companyName}</p>
              <p>{experience.workLocation}</p>
              <ul>
                {experience.workSummary.map((description) => {
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

class ExpInfoForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="workTitle">
          Title:
          <input id="workTitle" type={"text"} />
        </label>
        <label htmlFor="startDate">
          Start date:
          <input id="startDate" type={"text"} placeholder="Month & Year" />
        </label>
        <label htmlFor="endDate">
          End date:
          <input
            id="endDate"
            type={"text"}
            placeholder="Month & Year || Present if still working"
          />
        </label>
        <label htmlFor="companyName">
          Company name:
          <input id="companyName" type={"text"} />
        </label>
        <label htmlFor="workLoc">
          Work location:
          <input id="workLoc" type={"text"} />
        </label>
        <label htmlFor="desc1">
          Work description:
          <input id="desk1" type={"text"} />
        </label>
        <label htmlFor="desc2">
          Additional work description:
          <input id="desc2" type={"text"} />
        </label>
        <label htmlFor="desc3">
          Additional work description:
          <input id="desc3" type={"text"} />
        </label>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
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
      ],
      position: "",
      starDate: "",
      endDate: "",
      companyName: "",
      workLocation: "",
      workSummary: [],
      workDescription1: {
        text: "",
        id: uniqid(),
      },
      workDescription2: {
        text: "",
        id: uniqid(),
      },
      workDescription3: {
        text: "",
        id: uniqid(),
      },
      experienceID: uniqid(),
    };
  }

  render() {
    return (
      <section id="experience-info">
        <h3 id="exp-head">EXPERIENCE</h3>
        <button id="testBtn">+</button>
        <ExpInfoDisplay experiences={this.state.experiences} />
        <ExpInfoForm />
      </section>
    );
  }
}

export default ExpInfo;
