import { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoForm from "./components/GeneralInfoForm";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editGenInfo: true,
      name: "Driven Person",
      address: "Competence Kingdom",
      contactNum:"195-555-0375",
      email:"example@email.com",
      gitHub:"github.com/user",
      linkedIn:"linkedin.com/user",
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
      editGenInfo: true,
      name: e.target.value,
    });
  };

  editGeneralInfo = (e) => {
    e.stopPropagation();
    this.setState({
      editGenInfo: true,
    });
  };

  render() {
    let genInfo = <GeneralInfo infos={this.state} />;
    if (this.state.editGenInfo) genInfo = <GeneralInfoForm methods={"test"} />;
    return <main>{genInfo}</main>;
  }
}

export default App;
