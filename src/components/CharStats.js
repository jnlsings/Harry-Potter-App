import React, { Component } from 'react';

class CharStats extends Component {
  componentDidMount() {
    const apiKey = process.env.REACT_APP_HP_KEY;
    const url = `https://www.potterapi.com/v1/characters?key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(console.log)
      .catch(console.error);
    //   .then(response => {
    //     this.props.setSelectedCharacter(response[0]);});
  }

  render() {
    return <div></div>;
  }
}

// class CharStats extends Component {
//   state = {
//     loading: true,
//     person: ''
//   };

//   async componentDidMount() {
//     const url = 'https://www.potterapi.com/v1/sortingHat';
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data, loading: false });
//     console.log(data);
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loading || !this.state.person ? (
//           <div>loading...</div>
//         ) : (
//           <div>person...</div>
//         )}
//         <h1>Harry Potter individual character stats</h1>
//         <div>{this.state.person}</div>
//       </div>
//     );
//   }
//   arr;
// }

export default CharStats;
