import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharStats extends Component {
  render() {
    let characters = this.props.characters[0];
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
          <h3>Characters</h3>
          <h5>Click a character for more info!</h5>
          <div>{characterList}</div>
        </>
      );
    } else {
      return null;
    }
  }
}

export default CharStats;
