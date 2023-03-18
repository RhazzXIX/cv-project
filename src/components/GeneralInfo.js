import { Component } from "react";
import uniqid from "uniqid";
import "../styles/GeneralInfo.css";

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
    const mailRef = `mailto:${email}`;
    return (
      <div
        id="baseInfo"
        onMouseOver={this.handleHover}
        onMouseLeave={this.handleMouseleave}
      >
        <h1 id="name">{name}</h1>
        <h4 id="address">{address}</h4>
        <ul id="contacts">
          {contactNum && <li>{contactNum} </li>}
          {email && (
            <li>
              || <a href={mailRef}>{email}</a>
            </li>
          )}
          {gitHub && (
            <li>
              || <a href={gitHub}>{gitHub}</a>
            </li>
          )}
          {linkedIn && (
            <li>
              || <a href={linkedIn}>{linkedIn}</a>
            </li>
          )}
        </ul>
        {this.state.isHovering && (
          <button id="editBtn" onClick={editInfos}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
