import React, {Component} from 'react';
import './history.css';

class History extends Component {
  render() {
    return (
      <div className="container-fluid p-5"> {/* Check p-5 */}
        <div className="timeline">
          <div className="timeline-container timeline-left">
            <div className="timeline-content">
              <h2>2017</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="timeline-container timeline-right">
            <div className="timeline-content">
              <h2>2016</h2>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;