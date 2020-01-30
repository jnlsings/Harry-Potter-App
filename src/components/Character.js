import React, { Component } from 'react';
import '../App.css';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
    let charName = this.props.match.params.character;
    console.log(charName);
    let charNameId = this.props.match.params.filter(character => {
      return character.name === charName;
    });
    const apiKey = process.env.REACT_APP_HP_KEY;
    const charIdUrl = `https://www.potterapi.com/v1/characters/${charNameId[0].id}?key=${apiKey}`;

    fetch(charIdUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ character: [response] });
      });
  }

  render() {
    console.log(this.state);
    let character = this.state.character[0];
    console.log(character);
    let charItem;
    if (character) {
      charItem = character.map((character, index) => {
        return (
          <div className="character-page" key={`${character.name}-${index}`}>
            <h3>{character.name}</h3>
          </div>
        );
      });
    }
    return <div>{charItem}</div>;
  }
}

export default Character;
//this.props.character
// const this character filter over this.props.character
// find one that matches this.props.match.params.name
