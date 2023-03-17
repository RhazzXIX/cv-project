import { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoForm from "./components/GeneralInfoForm";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGenInfo: false,
      name: "Driven Person",
      address: "Competence Kingdom, Up-skilling World",
      contactNum: "195-555-0375",
      email: "example@email.com",
      gitHub: "github.com/user",
      linkedIn: "linkedin.com/user",
    };
  }

  submitGeneralEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      editGenInfo: false,
    });
  };

  handleChangeName = (e) => {
    e.stopPropagation();
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeAdd = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleChangeNumber = (e) => {
    this.setState({
      contactNum: e.target.value,
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangeGitHUb = (e) => {
    this.setState({
      gitHub: e.target.value,
    });
  };

  handleChangeLinkedIn = (e) => {
    this.setState({
      linkedIn: e.target.value,
    });
  };

  editGeneralInfo = (e) => {
    e.stopPropagation();
    this.setState({
      editGenInfo: true,
    });
  };

  render() {
    let genInfo = (
      <GeneralInfo infos={this.state} editInfos={this.editGeneralInfo} />
    );
    if (this.state.editGenInfo)
      genInfo = (
        <GeneralInfoForm
          infos={this.state}
          save={this.submitGeneralEdit}
          editName={this.handleChangeName}
          editAddress={this.handleChangeAdd}
          editNumber={this.handleChangeNumber}
          editEmail={this.handleChangeEmail}
          editGitHub={this.handleChangeGitHUb}
          editLinkedIn={this.handleChangeLinkedIn}
        />
      );
    return (
      <main>
        <section id="general-info">{genInfo}</section>
        <section></section>
      </main>
    );
  }
}

export default App;
