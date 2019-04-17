import React, {Component} from 'react';
import Navigation from '../navigation/navigation';
import Footer from "../footer/footer";
import Introduction from '../introduction/introduction'; 
import Bio from '../bio/bio';
import History from '../history/history';
import Skills from '../skills/skills';
import Contact from '../contact/contact';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Introduction/>
        <Bio/>
        <History/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default Home;