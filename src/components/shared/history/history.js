import React, {Component} from 'react';
import './history.css';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasTimelineConatinerInView: [false, false, false, false]
    };

    this.timelineContainerRefs = [
      React.createRef(), // ONE
      React.createRef(), // TWO
      React.createRef(), // THREE
      React.createRef()  // FOUR
    ];
  }

  timelineContainerRefs = [];

  isElementInView = (elementRef, offset = 0) => {
    if (!elementRef) {
      return false;
    }
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkTimelimeContainersInView = () => {
    let wasTimelineConatinerInView = this.state.wasTimelineConatinerInView;

    for (var i = 0; i < this.timelineContainerRefs.length; i++) {
      let timelineContainer = this.timelineContainerRefs[i];
      if (this.isElementInView(timelineContainer)) {
        wasTimelineConatinerInView[i] = true;
      }
    }

    if (wasTimelineConatinerInView.every(x => x)) {
      window.removeEventListener('scroll', this.checkTimelimeContainersInView);
    }

    this.setState({
      wasTimelineConatinerInView: wasTimelineConatinerInView
    });
  }

  getTimelineContainerClasses = (i) => { 
    let defaultClasses = "timeline-container timeline-left";

    if (this.state.wasTimelineConatinerInView[i]) {
      return defaultClasses + " animated slideInLeft faster";
    }
    return defaultClasses;
  }

  render() {
    return (
      <div className="container-fluid p-5">
        <div className="timeline">
          <div className={this.getTimelineContainerClasses(0)} ref={(el) => this.timelineContainerRefs[0] = el}>
            <div className="timeline-content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="timeline-container timeline-right" ref={(el) => this.timelineContainerRefs[1] = el}>
            <div className="timeline-content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="timeline-container timeline-left" ref={(el) => this.timelineContainerRefs[2] = el}>
            <div className="timeline-content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="timeline-container timeline-right" ref={(el) => this.timelineContainerRefs[3] = el}>
            <div className="timeline-content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkTimelimeContainersInView);
  }
}

export default History;