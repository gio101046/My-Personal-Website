import React, {Component} from 'react';
import './skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProgressBarOneInView: false
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
    if (!elementRef) return false;
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkProgressBarsInView = () => {
    for (var i = 0; i < this.progressBarRefs.length; i++) {
      let progressBarRef = this.progressBarRefs[i];
      if (this.isElementInView(progressBarRef)) {
        this.setState({
          isProgressBarOneInView: true /* In Progress */
        });
      }
    }
  }

  render() {
    let isProgressBarOneInView = this.state.isProgressBarOneInView;

    return (
      <div className="container">
        <div className="row pl-5 pr-5">
          <div className="col">
            <h2><strong>Skills and Abilities</strong></h2>
            <div className="mt-5 mb-4">
              <h4 className="text-left">C#/.NET</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[0] = el}
                     role="progressbar" style={{width: isProgressBarOneInView ? 88+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Javascript</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[1] = el}
                     role="progressbar" style={{width: 75+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Software Design</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[2] = el}
                     role="progressbar" style={{width: 70+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">MSSQL</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarRefs[3] = el}
                     role="progressbar" style={{width: 62+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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