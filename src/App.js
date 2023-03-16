import { Component } from "react";
import Info from "./components/Info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Driven Person",
      jobTitle: "Web Developer",
      address: "Competence Kingdom",
      contacts: [
        "195-555-0375",
        "example@email.com",
        "github.com/user",
        "linkedin.com/user",
      ],
    };
  }

  render() {
    return (
      <main>
        <Info infos={this.state} />
      </main>
    );
  }
}

export default App;
