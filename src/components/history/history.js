import React, {Component} from 'react';
import './history.css';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasTimelineConatinerInView: [false, false, false, false]
    };

    this.timelineContainers = [
      {
        ref: React.createRef(),
        heading: 'Miami Dade College - 2014',
        content: `I studied at MDC as a Computer Engineering major. I consistently took more programming and computer science
                  courses than my major required. These included courses like VB, C, C++, Java among other high rigour courses.`,
        position: 'left'
      },
      {
        ref: React.createRef(),
        heading: 'EnTec - 2015',
        content: `I graduated from MDC and was offered a position as a teaching assistant at MDC's school of engineering
                  technology. My goal was to inpire students and help them excel in the area of IT.`,
        position: 'right'
      },
      {
        ref: React.createRef(),
        heading: 'CS50x Miami - 2016',
        content: `I completed Harvard's largest MOOC course called CS50 offered at MDC's Idea Center. Was invited to Boston to 
                  present my project to CS50's professor David Malan. I later volunteered myself as a teaching fellow for others taking
                  the CS50x Miami course.`,
        position: 'left'
      },
      {
        ref: React.createRef(),
        heading: 'InsTech - 2017',
        content: `After many internships and job applications I was hired by Insurance Technologies. A software company focused on
                  bringing comprehensive solutions to clients in the insurance industry. I'm currently the lead developer in charge
                  of a system that is used by 300+ employees.`,
        position: 'right'
      },
    ];
  }

  timelineContainers = [];

  isElementInView = (elementRef, offset = 0) => {
    if (!elementRef) {
      return false;
    }
    const top = elementRef.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  checkTimelimeContainersInView = () => {
    let wasTimelineConatinerInView = this.state.wasTimelineConatinerInView;

    for (var i = 0; i < this.timelineContainers.length; i++) {
      let timelineContainerRef = this.timelineContainers[i].ref;
      if (this.isElementInView(timelineContainerRef)) {
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

  getTimelineContainerClasses = (timelineContainer, i) => { 
    let defaultClasses = 'timeline-container';
    let isLeft = timelineContainer.position === 'left';

    if (isLeft) {
      defaultClasses += ' timeline-left';
    } else {
      defaultClasses += ' timeline-right';
    }

    if (this.state.wasTimelineConatinerInView[i]) {
      defaultClasses += ` ${isLeft ? 'slideInLeft' : 'slideInRight'} animated faster`;
    }

    if (i === (this.timelineContainers.length - 1)) {
      defaultClasses += 'mb-3';
    } else {
      defaultClasses += 'mb-5';
    }
    
    return defaultClasses;
  }

  render() {
    return (
      <div className="container-fluid" id="history">
        <div className="section-height"></div>
        <div className="timeline">
          {this.timelineContainers.map((timelineContainer, i) => {
            return (
              <div className={this.getTimelineContainerClasses(timelineContainer, i)} ref={(el) => timelineContainer.ref = el} key={i}>
                <div className="timeline-content">
                  <h1>{timelineContainer.heading}</h1>
                  <h5>{timelineContainer.content}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkTimelimeContainersInView);
  }
}

export default History;