import React, { Component } from 'react';
import '../App.css';
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
        this.setState({ house: [response] });
      });
  }

  render() {
    let house = this.state.house[0];
    let houseItem;
    if (house) {
      houseItem = house.map((house, index) => {
        return (
          <div key={`${house.member}-${index}`}>
            <div className="house-name-div">
              <h1 className="house-name">{house.name}</h1>
            </div>
            <div className="house-page" key={`${house.member}-${index}`}>
              <div
                className="house-column-one"
                key={`${house.member}-${index}`}
              >
                <h4>Mascot: </h4>
                {house.mascot}
                <h4>Head of House: </h4>
                {house.headOfHouse}
                <h4>House Ghost: </h4>
                {house.houseGhost}
                <h4>Founder: </h4>
                {house.founder}
                <h4>Values:</h4>
                <div>
                  {house.values.map(value => {
                    return <div key={value}>{value}</div>;
                  })}
                </div>
                <h4>Colors: </h4>
                <div>
                  {house.colors.map(color => {
                    return <div key={color}>{color}</div>;
                  })}
                </div>
              </div>
              <div className="house-column-2" key={`${house.name}-${index}`}>
                <h3>House Members</h3>
                <h5>click member for more info</h5>
                <div className="member-list">
                  {house.members.map(member => {
                    let characterPathName = `/characters/${member.name}`;
                    return (
                      <Link
                        key={member.name}
                        className="character-link"
                        to={characterPathName}
                      >
                        <li className="member-name" key={member.name}>
                          {member.name}
                        </li>
                      </Link>
                    );
                  })}
                </div>
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
