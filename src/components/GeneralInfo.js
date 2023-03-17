import { Component } from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  handleHover = (e) => {
    this.setState({ isHovering: true });
  };

  handleMouseleave = (e) => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    const { name, address, contactNum, email, gitHub, linkedIn } =
      this.props.infos;
    const editInfos = this.props.editInfos;
    return (
      <div
        id="baseInfo"
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleMouseleave}
      >
        <h1 id="name">{name}</h1>
        <h4 id="address">{address}</h4>
        <ul id="contacts">
          {contactNum && <li>{contactNum}</li>}
          {email && <li>|| {email}</li>}
          {gitHub && <li>|| {gitHub}</li>}
          {linkedIn && <li>|| {linkedIn}</li>}
        </ul>
        {this.state.isHovering && <button onClick={editInfos}>edit</button>}
      </div>
    );
  }
}

export default GeneralInfo;
