import { Component } from "react";
import "../styles/ExpInfo.css";

class ExpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 id="exp-head">EXPERIENCE</h1>
        <button id="testBtn">+</button>
      </div>
    );
  }
}

export default ExpInfo;
