import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        animals: ''
    };
  }

  componentDidMount() {
      axios.get('https://api.petfinder.com/v2/animals', {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PETFINDER_TOKEN}`
        }
      })
      .then((res) => {
        console.log(res.data);
        console.log("animals = " + res.data.animals);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default App;