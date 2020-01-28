import React, { Component } from 'react';
import CharStats from './CharStats';
import { Link } from 'react-router-dom';

class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: []
    };
  }

  componentDidMount() {
    const apiKey = process.env.REACT_APP_HP_KEY;
    const houseIdUrl = `https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f?key=${apiKey}`;

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
        //house data is stored by ID number in the API url
        // if house name is in URL address, display that house
        let pathName = `/${house.name}`;
        return (
          <div key={`${house}-${index}`}>
            <Link className="house-link" to={pathName}>
              {house.name}
            </Link>
          </div>
        );
      });
    }
    return <div>{houseItem}</div>;
  }
}

export default House;

//create an object w/name and id to iterate over in order to plug in url
