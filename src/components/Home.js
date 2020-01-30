import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    // let houses = this.props.houses.houseData;
    let houses = this.props.houses[0];
    let houseList;
    if (houses) {
      houseList = houses.map((house, index) => {
        let housePathName = `/houses/${house.name}`;
        return (
          <div key={`${house}-${index}`}>
            <Link className="house-link" to={housePathName}>
              {house.name}
            </Link>
          </div>
        );
      });
    }

    return (
      <>
        <div className="home-page">
          <h2 className="choose-house">*Choose Your Hogwarts House*</h2>
          <div className="house-list">{houseList}</div>
        </div>
      </>
    );
  }
}

export default Home;
