import React, { Component } from 'react';
import '../App.css';

class Character extends Component {
  render() {
    let charName = this.props.match.params.character;
    let charArray = this.props.character[0];
    let thisChar = charArray.filter(character => {
      return character.name === charName;
    });
    if (thisChar) {
      return (
        <div className="character-page">
          <h3>{thisChar[0].name}</h3>
          {thisChar[0].ministryOfMagic && <h4>Ministry of Magic</h4>}
          {thisChar[0].ministryOfMagic}
          {thisChar[0].orderOfThePhoenix && <h4>Order of the Phoenix</h4>}
          {thisChar[0].orderOfThePhoenix}
          {thisChar[0].dumbledoresArmy && <h4>Dumbledore's Army</h4>}
          {thisChar[0].dumbledoresArmy}
          {thisChar[0].deathEater && <h4>Death Eater</h4>}
          {thisChar[0].deathEater}
          {thisChar[0].alias && <h4>Alias: </h4>}
          {thisChar[0].alias}
          {thisChar[0].role && <h4>Role:</h4>}
          {thisChar[0].role}
          {thisChar[0].house && <h4>House: </h4>}
          {thisChar[0].house}
          {thisChar[0].school && <h4>School: </h4>}
          {thisChar[0].school}
          {thisChar[0].wand && <h4>Wand: </h4>}
          {thisChar[0].wand}
          {thisChar[0].patronus && <h4>Patronus: </h4>}
          {thisChar[0].patronus}
          {thisChar[0].animagus && <h4>Animagus: </h4>}
          {thisChar[0].animagus}
          {thisChar[0].boggart && <h4>Boggart: </h4>}
          {thisChar[0].boggart}
          {thisChar[0].bloodStatus && <h4>Blood Status: </h4>}
          {thisChar[0].bloodStatus}
          {thisChar[0].species && <h4>Species: </h4>}
          {thisChar[0].species}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Character;
