import React, {Component} from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="container-fluid" id="bio">
        <div className="row row-height-25 p-5">
          <div className="col"> 
            <div className="mx-auto text-center border-top border-bottom d-flex h-100 w-75">
              <h2 className="align-self-center">
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