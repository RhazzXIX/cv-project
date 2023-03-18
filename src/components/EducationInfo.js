import { Component } from "react";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: true,
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
    return (
      <section
        id="educationInfo"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <h3 id="edu-head">Education</h3>
        {this.state.isHovering && (
          <button className="addInfosBtn" onClick={this.addEduInfo}>
            +
          </button>
        )}
      </section>
    );
  }
}

export default EducationInfo;
