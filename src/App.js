import { Component } from "react";
import Info from "./components/Info";
import uniqid from "uniqid";

class Element extends Component {
  render() {
    return <button></button>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        text: "Driven Person",
        edit: false,
      },
      address: "Competence Kingdom",
      addressEdit: {
        text: "Competence Kingdom",
        edit: false,
      },
      contact: {
        text: "",
        id: uniqid(),
      },
      contacts: [
        {
          text: "195-555-0375",
          id: uniqid(),
        },
        {
          text: "example@email.com",
          id: uniqid(),
        },
        {
          text: "github.com/user",
          id: uniqid(),
        },
        {
          text: "linkedin.com/user",
          id: uniqid(),
        },
      ],
      profile: `Always pursuing improvement, not resting in my Laurels`,
      profileEdit: {
        text: "",
        edit: false,
      },
    };
    this.element = <button>test</button>;
  }

  submitName = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      name: {
        text: this.state.name.text,
        edit: false,
      },
    });
  };

  handleName = (e) => {
    e.stopPropagation();
    this.setState({
      name: {
        text: e.target.value,
        edit: true,
      },
    });
  };

  editName = (e) => {
    e.stopPropagation();
    this.setState({
      name: {
        text: this.state.name.text,
        edit: true,
      },
    });
  };

  render() {
    return (
      <main>
        <Info
          infos={this.state}
          method={{
            edit: this.editName,
            submit: this.submitName,
            change: this.handleName,
          }}
        />
      </main>
    );
  }
}

export default App;
