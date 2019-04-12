import React, {Component} from 'react';
import './skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasProgressBarInView: [false, false, false, false]
    };

    this.progressBarRefs = [
      React.createRef(), // ONE
      React.createRef(), // TWO
      React.createRef(), // THREE
      React.createRef()  // FOUR
    ];
  }

  progressBarRefs = [];

  isElementInView = (elementRef, offset = 0) => {
    if (!elementRef) {
      return false;
    }
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkProgressBarsInView = () => {
    let wasProgressBarInView = this.state.wasProgressBarInView;

    for (var i = 0; i < this.progressBarRefs.length; i++) {
      let progressBarRef = this.progressBarRefs[i];
      if (this.isElementInView(progressBarRef)) {
        wasProgressBarInView[i] = true;
      }
    }

    if (wasProgressBarInView.every(x => x)) {
      window.removeEventListener('scroll', this.checkProgressBarsInView);
    }

    this.setState({
      wasProgressBarInView: wasProgressBarInView
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row p-5">
          <div className="col">
            <h2><strong>Skills and Abilities</strong></h2>
            <div className="mt-5 mb-4">
              <h4 className="text-left">C#/.NET</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[0] = el}
                     role="progressbar" style={{width: this.state.wasProgressBarInView[0] ? 88+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Javascript</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[1] = el}
                     role="progressbar" style={{width: this.state.wasProgressBarInView[1] ? 75+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Software Design</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[2] = el}
                     role="progressbar"style={{width: this.state.wasProgressBarInView[2] ? 70+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">MSSQL</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[3] = el}
                     role="progressbar" style={{width: this.state.wasProgressBarInView[3] ? 62+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkProgressBarsInView);
  }
}

export default Skills;