import React, { Component } from 'react';
import Layout from "../src/Components/Layout/Layout"
import BurgerBuilder from '../src/Components/BurgerBuilder/BurgerBuilder'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
        <BurgerBuilder></BurgerBuilder>
      </div>
    );
  }
}

export default App;
