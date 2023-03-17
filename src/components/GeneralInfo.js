import { Component } from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, address, contactNum, email, gitHub, linkedIn } =
      this.props.infos;

    return (
      <section id="baseInfo">
        <h1 id="name">{name}</h1>
        <h4 id="address">{address}</h4>
        <ul id="contacts">
          <li>{contactNum}</li>
          <li>{email}</li>
          <li>{gitHub}</li>
          <li>{linkedIn}</li>
        </ul>
      </section>
    );
  }
}

export default GeneralInfo;
