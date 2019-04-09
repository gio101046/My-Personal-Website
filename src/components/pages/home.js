import React, {Component} from 'react';
import Header from '../shared/header/header';
import Footer from "../shared/footer/footer";
import Content from '../shared/content/content';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default Home;