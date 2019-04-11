import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-end nav-background-color">
          <div className="col-1 nav-menu-item pt-2 pb-2">
            <h3>Intro</h3>
          </div>
          <div className="col-1 nav-menu-item pt-2 pb-2">
            <h3>Bio</h3>
          </div>
          <div className="col-1 nav-menu-item pt-2 pb-2">
            <h3>Portfolio</h3>
          </div>
          <div className="col-1 nav-menu-item pt-2 pb-2">
            <h3>Skills</h3>
          </div>
          <div className="col-1 nav-menu-item pt-2 pb-2">
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;