import React, {Component} from 'react';
import Navigation from '../shared/navigation/navigation';
import Footer from "../shared/footer/footer";
import Introduction from '../shared/introduction/introduction'; 
import Bio from '../shared/bio/bio';
import History from '../shared/history/history';
import Skills from '../shared/skills/skills'

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Introduction/>
        <Bio/>
        <History/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
}

export default Home;