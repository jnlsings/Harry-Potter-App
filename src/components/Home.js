import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>All Characters</h2>
        <h3>Character Image</h3>
        <h3>Character Name</h3>
        <p>
          On click, each image will send user to CharStats for that character
        </p>
      </div>
    );
  }
}

export default Home;
