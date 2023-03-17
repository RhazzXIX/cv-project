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
      address: "Competence Kingdom",
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
      github: e.target.value,
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
    const button = <button onClick={this.editGeneralInfo}>Edit</button>;
    let genInfo = <GeneralInfo infos={this.state} button={button} />;
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
        <section>{genInfo}</section>
      </main>
    );
  }
}

export default App;
