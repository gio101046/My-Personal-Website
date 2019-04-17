import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid" id="contact">
      <div className="section-height"></div>
        <div className="row mb-3">
          <div className="col"> 
            <div className="text-center">
              <h1 className="w-100">
                Intresting in working with me?
              </h1>
              <h2 className="mx-auto content-text-size content-width mt-4">
                You can get a hold of me by texting me at <strong>(305) 570 1332</strong> or you can just email me at <strong>grodriguez@gtek.dev</strong>.
                You can also see what I am up to by clicking the social media icons below.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;