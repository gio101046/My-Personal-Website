import React, {Component} from 'react';
import ProfilePicture from '../../../images/home/profilePicture.jpg';
import "./content.css";

const lineOneText = 'Hi, my name is Giovani.';
const lineTwoText = 'I am a software developer.';

class Content extends Component {
  constructor(props) {
    super(props);

    let typingInterval = this.startTyping();
    this.state = {
      currentLineOne: '',
      currentLineTwo: '',
      currentCharLineOne: 0,
      currentCharLineTwo: 0,
      isCursorVisible: false,
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
    let blinkingInterval = setInterval(this.blink, 100);
  }

  type = () => {
    let { currentLineOne, 
          currentCharLineOne,
          interval } = this.state;

    if (currentCharLineOne === 0 || currentCharLineOne !== this.getLineOneText().length) {
      currentLineOne += this.getLineOneText()[currentCharLineOne];      
    } else {
      clearInterval(interval);
      return;
    }

    currentCharLineOne++;
    this.setState({ currentLineOne: currentLineOne, 
                    currentCharLineOne: currentCharLineOne });
  }

  blink = () => {
    
  }

  getCursorClasses = () => {
    let isCursorVisible = this.state.isCursorVisible;
    return `align-text-top ${isCursorVisible ? 'visible' : 'invisible'}`;
  }

  render() { 
    return (
      <div className="container-fluid" id="introduction">
        <div className="row align-items-center pt-4 pb-4">
          <div className="col">
            <div className="text-center">
              <img src={ProfilePicture} alt="Giovani's Face" className="rounded-circle img-fluid float-right" width="400" />
            </div>
          </div>
          <div className="col">
            <div className="pl-3"> 
              <h1 className="text-left">{this.state.currentLineOne}<span className="align-text-top">|</span></h1>
              <h2 className="text-left">{this.state.currentLineTwo}</h2>
            </div>
          </div>
        </div>
      </div>
    ); 
  }

  // componentDidUpdate() {
  // }
}

export default Content;