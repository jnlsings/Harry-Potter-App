import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharStats extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     characters: []
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.state.characters.name);
  //   const apiKey = process.env.REACT_APP_HP_KEY;
  //   const charactersUrl = `https://www.potterapi.com/v1/characters?key=${apiKey}`;

  //   fetch(charactersUrl)
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ characters: [response] });
  //     });
  // }

  render() {
    console.log(this.props);
    let characters = this.props.characters[0];
    console.log(characters);
    let characterList;
    if (characters) {
      characterList = characters.map((character, index) => {
        let characterPathName = `/characters/${character.name}`;
        return (
          <div key={`${character}-${index}`}>
            <Link className="character-link" to={characterPathName}>
              {character.name}
            </Link>
          </div>
        );
      });
      return (
        <>
          <h3>Character List</h3>
          <div>{characterList}</div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default CharStats;

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
