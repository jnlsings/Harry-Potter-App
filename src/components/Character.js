import React, { Component } from 'react';
import '../App.css';

class Character extends Component {
  render() {
    console.log(this.props.character);
    let charName = this.props.match.params.character;
    console.log(charName);
    let charArray = this.props.character[0];
    console.log(charArray);
    let thisChar = charArray.filter(character => {
      return character.name === charName;
    });
    console.log(thisChar);
    if (thisChar) {
      return (
        <div className="character-page">
          <h3>{thisChar[0].name}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Character;
//this.props.character
// const this character filter over this.props.character
// find one that matches this.props.match.params.name
