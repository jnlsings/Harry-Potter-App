import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
    const apiKey = process.env.REACT_APP_HP_KEY;
    const url = `https://www.potterapi.com/v1/houses?key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(console.log);
    //   .then(response => {
    //     this.props.showApiHouse(response.name);
    //   });
  }
  render() {
    // let apiHouses = this.response.map((house, index) => {
    //   let name = house.name;

    //   return <div key={`${name}-${index}`}></div>;
    // });

    return (
      <div>
        <h2>Houses</h2>
        {/* <h4>{apiHouses}</h4> */}
        <p>
          On click, each image will send user to CharStats for that character
        </p>
      </div>
    );
  }
}

export default Home;
