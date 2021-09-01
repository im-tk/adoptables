import React, { Component } from 'react';
import getPetFinderToken from './util/getPetFinderToken';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        animals: ''
    };
  }

  componentDidMount() {
    getPetFinderToken();
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default App;