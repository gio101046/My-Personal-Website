import React, {Component} from 'react';
import Header from '../shared/header/header';
import Footer from "../shared/footer/footer";
import Introduction from '../shared/introduction/introduction';
import Bio from '../shared/bio/bio';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Introduction/>
        <Bio/>
        <Footer/>
      </div>
    );
  }
}

export default Home;