import { Component } from "react";
import uniqid from "uniqid";

class Info extends Component {
  render() {
    const { name, jobTitle, address, contacts } = this.props.infos;
    return (
      <section id="baseInfo">
        <h1 id="name">{name}</h1>
        <h3 id="title">{jobTitle}</h3>
        <h4 id="address">{address}</h4>
        <ul id="contacts">
          {contacts.map((contact, i) => {
            if (i === 0) return <li key={uniqid()}>{contact} </li>;
            return <li key={uniqid()}>|| {contact} </li>;
          })}
        </ul>
      </section>
    );
  }
}

export default Info;
