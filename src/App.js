import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import GeneralInfoForm from "./components/GeneralInfoForm";
import ExpInfo from "./components/ExpInfo";
import "./styles/App.css";
import EducationInfo from "./components/EducationInfo";
import ProjectInfo from "./components/ProjectInfo";
import TechSkillsInfo from "./components/TechSkillsInfo";
import Instruction from "./components/Instruction";

const App = () => {
  const [instructionIsShown, setInstruction] = useState(true);
  const [editGenInfo, setGenInfo] = useState(false);
  const [name, setName] = useState("Jake Ryan");
  const [address, setAddress] = useState("Georgetown, TX");
  const [contactNum, setContactNum] = useState("123-456-7890");
  const [email, setEmail] = useState("email@example.com");
  const [gitHub, setGitHub] = useState("github.com/user");
  const [linkedIn, setLinkedIn] = useState("linkedin.com/user");

  const submitGeneralEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setGenInfo(false);
  };

  const handleChangeName = (e) => {
    e.stopPropagation();
    setName(e.target.value);
  };

  const handleChangeAdd = (e) => {
    setAddress();
  };

  const handleChangeNumber = (e) => {
    setContactNum(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeGitHUb = (e) => {
    setGitHub(e.target.value);
  };

  const handleChangeLinkedIn = (e) => {
    setLinkedIn(e.target.value);
  };

  const editGeneralInfo = (e) => {
    e.stopPropagation();
    setGenInfo(true);
  };

  const removeInstruction = (e) => {
    if (e.target.dataset.remove === "yes") {
      setInstruction(false);
    }
  };

  const userInfo = { name, address, contactNum, email, gitHub, linkedIn };

  let genInfo = <GeneralInfo infos={userInfo} editInfos={editGeneralInfo} />;
  if (editGenInfo)
    genInfo = (
      <GeneralInfoForm
        infos={userInfo}
        save={submitGeneralEdit}
        editName={handleChangeName}
        editAddress={handleChangeAdd}
        editNumber={handleChangeNumber}
        editEmail={handleChangeEmail}
        editGitHub={handleChangeGitHUb}
        editLinkedIn={handleChangeLinkedIn}
      />
    );
  return (
    <main id="App">
      <section id="general-info">{genInfo}</section>
      <EducationInfo />
      <ExpInfo />
      <ProjectInfo />
      <TechSkillsInfo />
      {instructionIsShown && <Instruction remove={removeInstruction} />}
    </main>
  );
};

export default App;
