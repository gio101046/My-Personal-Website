import React, {Component} from 'react';
import ProfilePicture from '../../../images/home/profilePicture.jpg';
import "./introduction.css";

const lineOneText = 'Hi, my name is Giovani.';
const lineTwoText = 'I am a software developer. ';

class Introduction extends Component {
  constructor(props) {
    super(props);

    let typingInterval = this.startTyping();
    this.state = {
      currentLineOne: '',
      currentLineTwo: '',
      currentCharLineOne: 0,
      currentCharLineTwo: 0,
      isCursorOneVisible: true,
      isCursorTwoVisible: false,
      typingInterval: typingInterval,
      cursorBlinkingInterval: null
    };
  }

  getLineOneText = () => {
    return lineOneText;
  }

  getLineTwoText = () => {
    return lineTwoText;
  }

  startTyping = () => {
    let typingInterval = setInterval(this.type, 55);
    return typingInterval;
  }

  startBlinking = () => {
    let blinkingInterval = setInterval(this.blink, 125);
    return blinkingInterval;
  }

  type = () => {
    let { currentLineOne, 
          currentCharLineOne,
          currentLineTwo,
          currentCharLineTwo,
          typingInterval,
          blinkingInterval,
          isCursorOneVisible,
          isCursorTwoVisible } = this.state;

    if (currentCharLineOne === 0 || currentCharLineOne !== this.getLineOneText().length) {
      isCursorOneVisible = true;
      isCursorTwoVisible = false;
      currentLineOne += this.getLineOneText()[currentCharLineOne];
      currentCharLineOne++;
    } else if (currentCharLineTwo === 0 || currentCharLineTwo !== this.getLineTwoText().length) { 
      isCursorOneVisible = false;
      isCursorTwoVisible = true;
      currentLineTwo += this.getLineTwoText()[currentCharLineTwo];
      currentCharLineTwo++;
    } else {
      clearInterval(typingInterval);
      blinkingInterval = setInterval(this.blink, 500, 2);
    }

    this.setState({ currentLineOne: currentLineOne, 
                    currentCharLineOne: currentCharLineOne,
                    currentLineTwo: currentLineTwo, 
                    currentCharLineTwo: currentCharLineTwo,
                    blinkingInterval: blinkingInterval,
                    isCursorOneVisible: isCursorOneVisible,
                    isCursorTwoVisible: isCursorTwoVisible });
  }

  blink = (cursorNumber) => {
    if (cursorNumber === 1) {
      this.setState({ isCursorOneVisible: !this.state.isCursorOneVisible });
    } else {
      this.setState({ isCursorTwoVisible: !this.state.isCursorTwoVisible });
    }
  }

  getCursorClasses = (cursorNumber) => {
    let isCursorVisible = cursorNumber === 1 ? this.state.isCursorOneVisible : this.state.isCursorTwoVisible;
    return `align-text-top ${isCursorVisible ? 'visible' : 'invisible'}`;
  }

  render() { 
    return (
      <div className="container-fluid" id="introduction">
        <div className="row align-items-center pt-5 pb-5">
          <div className="col">
            <div className="text-center">
              <img src={ProfilePicture} alt="Giovani's Face" className="rounded-circle img-fluid img-thumbnail float-right" width="500" />
            </div>
          </div>
          <div className="col">
            <div className="pl-3"> 
              <h1 className="text-left">{this.state.currentLineOne}<span className={this.getCursorClasses(1)}>|</span></h1>
              <h2 className="text-left">{this.state.currentLineTwo}<span className={this.getCursorClasses(2)}>|</span></h2>
            </div>
            <div className="mt-5 pl-3"> 
              <button type="button" class="btn btn-outline-primary btn-lg float-left">Get To Know Me</button>
            </div>
          </div>
        </div>
      </div>
    ); 
  }

  // componentDidUpdate() {
  // }
}

export default Introduction;