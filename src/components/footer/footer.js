import React, {Component} from 'react';
import './footer.css';
import GithubIcon from '../../images/github-logo.svg';
import LinkedInIcon from '../../images/linkedin-logo.svg';
import TwitterIcon from '../../images/twitter-logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer-background-color">
        <div className="row justify-content-center">
          <div className="col-3 p-3 text-center">
            <a href="https://github.com/gio101046" className="d-block" target="_blank" rel="noopener noreferrer">
              <img alt="Github Icon" src={GithubIcon} width="64" height="64" />
            </a>
          </div>
          <div className="col-3 p-3 text-center">
            <a href="https://www.linkedin.com/in/giovaniluisrodriguez/" className="d-block" target="_blank" rel="noopener noreferrer">
              <img alt="LinkedIn Icon" src={LinkedInIcon} width="64" height="64" />
            </a>
          </div>
          <div className="col-3 p-3 text-center">
            <a href="https://twitter.com/gcode0727" className="d-block" target="_blank" rel="noopener noreferrer">
              <img alt="Twitter Icon" src={TwitterIcon} width="64" height="64" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;