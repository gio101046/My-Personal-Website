import React, {Component} from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="container-fluid" id="bio">
        <div className="section-height"></div>
        <div className="row">
          <div className="col"> 
            <div className="mx-auto text-center border-top border-bottom pl-1 pl-lg-5 pr-1 pr-lg-5 pt-5 pb-5 d-flex h-100 content-width">
              <h2 className="content-text-size">
                My name is <strong>Giovani Rodriguez</strong> and I create tools, applications and websites as solutions for individuals or businesses that need them. 
                I am a problem solver, solution maker upper and answer deilverer. I always itch to learn something new and strive to deliver my best. When I'm not 
                creating I am either reading, writing or playing games. 
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;