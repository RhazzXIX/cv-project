import { Component } from "react";
import "../styles/ExpInfo.css";
import uniqid from "uniqid";

class ExpInfoDisplay extends Component {
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
    const experiences = this.props.experiences;
    const deleteExp = this.props.deleteExp;
    return (
      <ul className="infoList">
        {experiences.map((experience) => {
          return (
            <li
              className="experience infoListItem"
              key={experience.experienceID}
              onMouseOver={this.handleHover}
              onMouseOut={this.handleMouseOut}
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
              {this.state.isHovering && (
                <button onClick={deleteExp} data-exp={experience.experienceID}>
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

class ExpInfoForm extends Component {
  render() {
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
    } = this.props;
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
  }
}

class ExpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      addInfo: false,
      experiences: [
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
      ],
      title: "",
      startDate: "",
      endDate: "",
      companyName: "",
      workLocation: "",
      workDescription1: {
        text: "",
        key: uniqid(),
      },
      workDescription2: {
        text: "",
        key: uniqid(),
      },
      workDescription3: {
        text: "",
        key: uniqid(),
      },
      experienceID: uniqid(),
    };
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleStartDateChange = (e) => this.setState({ startDate: e.target.value });

  handleEndDateChange = (e) => this.setState({ endDate: e.target.value });

  handleCompanyNameChange = (e) =>
    this.setState({ companyName: e.target.value });

  handleWorkLocationChange = (e) =>
    this.setState({ workLocation: e.target.value });

  handleWorkDescription1Change = (e) =>
    this.setState({
      workDescription1: {
        text: e.target.value,
        id: uniqid(),
      },
    });

  handleWorkDescription2Change = (e) =>
    this.setState({
      workDescription2: {
        text: e.target.value,
        id: uniqid(),
      },
    });

  handleWorkDescription3Change = (e) =>
    this.setState({
      workDescription3: {
        text: e.target.value,
        id: uniqid(),
      },
    });

  handleSaveExperience = (e) => {
    e.preventDefault();
    const experience = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      companyName: this.state.companyName,
      workLocation: this.state.workLocation,
      workSummary: [
        this.state.workDescription1,
        this.state.workDescription2,
        this.state.workDescription3,
      ],
      experienceID: this.state.experienceID,
    };

    this.setState({
      experiences: this.state.experiences.concat(experience),
      addInfo: false,
      title: "",
      startDate: "",
      endDate: "",
      companyName: "",
      workLocation: "",
      workDescription1: {
        text: "",
        key: uniqid(),
      },
      workDescription2: {
        text: "",
        key: uniqid(),
      },
      workDescription3: {
        text: "",
        key: uniqid(),
      },
      experienceID: uniqid(),
    });
  };

  addExpInfo = (e) => {
    this.setState({
      addInfo: true,
    });
  };

  cancelEdit = (e) => {
    this.setState({
      addInfo: false,
    });
  };

  deleteExperience = (e) => {
    this.setState({
      experiences: this.state.experiences.filter((experience) => {
        return experience.experienceID !== e.target.dataset.exp;
      }),
    });
  };

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
        id="experience-info"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <h3 id="exp-head">EXPERIENCE</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addExpInfo}>
            +
          </button>
        )}
        <ExpInfoDisplay
          experiences={this.state.experiences}
          deleteExp={this.deleteExperience}
        />
        {this.state.addInfo && (
          <ExpInfoForm
            addTitle={this.handleTitleChange}
            addStartDate={this.handleStartDateChange}
            addEndDate={this.handleEndDateChange}
            addCompany={this.handleCompanyNameChange}
            addWorkLoc={this.handleWorkLocationChange}
            addWorkDesc1={this.handleWorkDescription1Change}
            addWorkDesc2={this.handleWorkDescription2Change}
            addWorkDesc3={this.handleWorkDescription3Change}
            saveInfo={this.handleSaveExperience}
            cancel={this.cancelEdit}
          />
        )}
      </section>
    );
  }
}

export default ExpInfo;
