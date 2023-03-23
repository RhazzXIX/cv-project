import { useState } from "react";
import "../styles/GeneralInfo.css";

const GeneralInfo = (props) => {
  const [isHovering, setHovering] = useState(false);

  const handleHover = (e) => {
    setHovering(true);
  };

  const handleMouseOut = (e) => {
    setHovering(false);
  };

  const { name, address, contactNum, email, gitHub, linkedIn } = props.infos;
  const editInfos = props.editInfos;
  const mailRef = `mailto:${email}`;
  
  return (
    <div id="baseInfo" onMouseOver={handleHover} onMouseLeave={handleMouseOut}>
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
      {isHovering && (
        <button id="editBtn" onClick={editInfos}>
          Edit
        </button>
      )}
    </div>
  );
};

export default GeneralInfo;
