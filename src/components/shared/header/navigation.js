import React, {Component} from 'react';
import './navigation.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.navigationOptions = [
      {
        content: 'Intro',
        href: '#intro'
      },
      {
        content: 'Bio',
        href: '#bio'
      },
      {
        content: 'History',
        href: '#history'
      },
      {
        content: 'Skills',
        href: '#skills'
      },
      {
        content: 'Contact',
        href: '#contact'
      }
    ];
  }

  navigationOptions = [];

  render() {
    return (
      <div className="container-fluid fixed-top">
        <div className="row justify-content-end nav-background-color">
          <div className="col-1">
            <span className="octicon-mark-github" aria-hidden="true"></span>
          </div>
          {this.navigationOptions.map((navigationOption, i) => {
            return (
              <a className="col-1 nav-menu-item remove-link-styling" href={navigationOption.href}>
                <div className="text-center pt-2 pb-2">
                  <h3>{navigationOption.content}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavigationBar;