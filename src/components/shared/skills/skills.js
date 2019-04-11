import React, {Component} from 'react';
import './skills.css';
import { ReactComponent } from '*.svg';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProgressBarOneInView: false
    };
  }

  progressBarOneRef = React.createRef();

  isElementInView = (offset, elementRef) => {
    if (!elementRef) return false;
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkProgressBarsInView = () {

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
              <div className="progress progress-bar-height" id="progress-bar-one">
                <div className="progress-bar progress-bar-ani" ref={(el) => this.progressBarOneRef = el}
                     role="progressbar" style={{width: isProgressBarOneInView ? 88+'%' : 0}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Javascript</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar progress-bar-ani" role="progressbar" style={{width: 75+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">Software Design</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar" role="progressbar" style={{width: 70+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="mt-5 mb-4">
              <h4 className="text-left">MSSQL</h4>
              <div className="progress progress-bar-height">
                <div className="progress-bar" role="progressbar" style={{width: 62+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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