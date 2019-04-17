import React, {Component} from 'react';
import './skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);

    /* Initialize progress bars in view flags in state */
    this.state = {
      wasProgressBarInView: [false, false, false, false]
    };

    /* Create static content information */
    this.progressBars = [
      {
        ref: React.createRef(),
        percentageWidth: 88,
        heading: "C#/.NET"
      },
      {
        ref: React.createRef(),
        percentageWidth: 75,
        heading: "Javascript"
      },
      {
        ref: React.createRef(),
        percentageWidth: 70,
        heading: "Software Design"
      },
      {
        ref: React.createRef(),
        percentageWidth: 62,
        heading: "MSSQL"
      }
    ];
  }

  /* Class field to store static content */
  progressBars = [];

  /* Checks to see if an element is in view using it's ref - REDUNTANT IN OTHER CONTROLLER */
  isElementInView = (elementRef, offset = 0) => { 
    if (!elementRef) {
      return false;
    }
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  /* Sets if progress bar was ever in view flag for each progress bar currently in view */
  checkProgressBarsInView = () => {
    let wasProgressBarInView = this.state.wasProgressBarInView;

    for (var i = 0; i < this.progressBars.length; i++) {
      let progressBar = this.progressBars[i];
      if (this.isElementInView(progressBar.ref)) {
        wasProgressBarInView[i] = true;
      }
    }

    // Remove event listener once all flags are set
    if (wasProgressBarInView.every(x => x)) {
      window.removeEventListener('scroll', this.checkProgressBarsInView);
    }

    this.setState({
      wasProgressBarInView: wasProgressBarInView
    });
  }

  render() {
    return (
      <div className="container" id="skills">
        <div className="section-height"></div>
        <div className="row">
          <div className="col">
            <div className="border-top border-bottom ml-2 mr-2 pb-5 pt-5">
              <h2><strong>Skills and Abilities</strong></h2>
                {this.progressBars.map((progressBar, i) => {
                  return (
                    <div className="mt-5 mb-4" key={i}>
                      <h4 className="float-left d-inline-block">{progressBar.heading}</h4>
                      <h4 className="float-right d-inline-block">{progressBar.percentageWidth+'%'}</h4>
                      <div className="progress progress-bar-height w-100">
                        <div className="progress-bar progress-bar-ani" 
                             ref={(el) => progressBar.ref = el}
                             role="progressbar" 
                             style={{width: this.state.wasProgressBarInView[i] ? progressBar.percentageWidth+'%' : 0}} 
                             aria-valuenow="25" 
                             aria-valuemin="0" 
                             aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* When component is initially mounted add scroll event listener */
  componentDidMount() {
    window.addEventListener('scroll', this.checkProgressBarsInView);
  }
}

export default Skills;