import { Component } from "react";
import uniqid from "uniqid";

class GeneralInfo extends Component {
  render() {
    const { name, address, contacts } = this.props.infos;
    return (
      <section id="baseInfo">
        <h1 id="name">{name.text}</h1>
        <h4 id="address">{address.text}</h4>
        <ul id="contacts">
          {contacts.map((contact, i) => {
            if (i === 0) return <li key={uniqid()}>{contact.text} </li>;
            return <li key={uniqid()}>|| {contact.text} </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default GeneralInfo;
