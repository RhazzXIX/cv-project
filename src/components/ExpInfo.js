import { Component } from "react";
import "../styles/ExpInfo.css";
import uniqid from 'uniqid';



class ExpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          position: 'Undergraduate Research Assistant',
          starDate: 'June 2022',
          endDate:'Present',
          companyName: 'Excelsior',
          workLocation: 'Competence Kingdom',
          workSummary: [
            'Developing Apps that makes an impact',
            'Teaching and developing juniors', 
            'Making sure the applications is of great quality'
          ],
          workDescription: '',
          experienceID: uniqid()
        },
      ],
      experience: {
        position: '',
        starDate: '',
        endDate:'',
        companyName: '',
        workLocation: '',
        workSummary: [],
        workDescription: '',
        experienceID: uniqid()
      }
    };
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
