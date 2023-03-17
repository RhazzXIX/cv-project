import "../styles/GeneralInfoForm.css";

const GeneralInfoForm = (props) => {
  const { name, address, contactNum, email, gitHub, linkedIn } = props.infos;
  const {
    save,
    editName,
    editAddress,
    editNumber,
    editEmail,
    editGitHub,
    editLinkedIn,
  } = props;
  return (
    <form className="genInfoForm" onSubmit={save}>
      <label className="nameLabel" htmlFor="name">
        Full Name:
        <input type={"text"} id="name" value={name} onChange={editName} />
      </label>
      <label className="addressLabel" htmlFor="address">
        Address:
        <input
          type={"text"}
          id="address"
          value={address}
          onChange={editAddress}
        />
      </label>
      <label htmlFor="contact-number">
        Contact number:
        <input
          type={"text"}
          id={"contact-number"}
          inputMode={"tel"}
          value={contactNum}
          onChange={editNumber}
        />
      </label>
      <label htmlFor="email">
        Email address:
        <input type="email" id={"email"} value={email} onChange={editEmail} />
      </label>
      <label htmlFor="gitHub">
        Github profile:
        <input
          type={"text"}
          id={"gitHub"}
          value={gitHub}
          onChange={editGitHub}
        />
      </label>
      <label htmlFor="linkedin">
        LinkedIn profile:
        <input
          type={"text"}
          id={"linkedin"}
          value={linkedIn}
          onChange={editLinkedIn}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default GeneralInfoForm;
