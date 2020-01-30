import React, { Component } from 'react';
import '../App.css';
// import CharStats from './CharStats';
import { Link } from 'react-router-dom';

let houseNameIdArray = [
  {
    name: 'Gryffindor',
    id: '5a05e2b252f721a3cf2ea33f'
  },
  { name: 'Ravenclaw', id: '5a05da69d45bd0a11bd5e06f' },
  {
    name: 'Slytherin',
    id: '5a05dc8cd45bd0a11bd5e071'
  },
  {
    name: 'Hufflepuff',
    id: '5a05dc58d45bd0a11bd5e070'
  }
];
class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: []
    };
  }

  componentDidMount() {
    let houseName = this.props.match.params.house;
    let houseNameId = houseNameIdArray.filter(house => {
      return house.name === houseName;
    });
    const apiKey = process.env.REACT_APP_HP_KEY;
    const houseIdUrl = `https://www.potterapi.com/v1/houses/${houseNameId[0].id}?key=${apiKey}`;

    fetch(houseIdUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ house: [response] });
      });
  }

  render() {
    console.log(this.state);
    let house = this.state.house[0];
    console.log(house);
    let houseItem;
    if (house) {
      houseItem = house.map((house, index) => {
        return (
          <div>
            <h1 className="house-name">{house.name}</h1>
            <div className="house-page" key={`${house.member}-${index}`}>
              <div className="house-column-one">
                <h4>Mascot: </h4>
                {house.mascot}
                <h4>Head of House: </h4>
                {house.headOfHouse}
                <h4>House Ghost: </h4>
                {house.houseGhost}
                <h4>Founder: </h4>
                {house.founder}
                <h4>Values:</h4>
                <ul>
                  {house.values.map(value => {
                    return <div key={value}>{value}</div>;
                  })}
                </ul>
                <h4>Colors: </h4>
                <ul>
                  {house.colors.map(color => {
                    return <div key={color}>{color}</div>;
                  })}
                </ul>
                <h4>School: </h4>
                {house.school}
              </div>
              <div className="house-column-2">
                <h3>House Members</h3>
                <ul className="member-list">
                  {house.members.map(member => {
                    let characterPathName = `/characters/${member.name}`;
                    return (
                      <Link className="character-link" to={characterPathName}>
                        <li className="member-name" key={member.id}>
                          {member.name}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      });
    }
    return <div>{houseItem}</div>;
  }
}

export default House;

//create an object w/name and id to iterate over in order to plug in url
//house data is stored by ID number in the API url
// if house name is in URL address, display that house
