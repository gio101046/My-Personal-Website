import React, {Component} from 'react';
import ProfilePicture from '../../../images/home/profilePicture.jpg';

class Content extends Component {
  /* Create typing logic */

  render() {
    return (
      <div className="container-fluid" id="introduction">
        <div className="row align-items-center pt-4 pb-4">
          <div className="col">
            <div className="text-center">
              <img src={ProfilePicture} alt="Giovani's Profile Picture" className="rounded-circle img-fluid float-right" width="400" />
            </div>
          </div>
          <div className="col">
            <div className="pl-3"> 
              <h1 className="text-left">Hi, my name is Giovani.</h1>
              <h2 className="text-left">I am a software developer.|</h2>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Content;