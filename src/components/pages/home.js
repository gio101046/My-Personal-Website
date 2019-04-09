import React, {Component} from 'react';
import Header from '../shared/header';
import Footer from "../shared/footer";
import Carousel from '../shared/carousel';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <Footer/>
      </div>
    );
  }
}

export default Home;