import React, { Component } from 'react';
import '../App.css';
import House from './House';
import { Link, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.props);
    let houses = this.props.houses[0];
    console.log(houses);
    let houseList;
    if (houses) {
      houseList = houses.map((house, index) => {
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

    return (
      <>
        <div className="home-page">
          <h2 className="choose-house">*Choose Your Hogwarts House*</h2>
          <div className="house-list">{houseList}</div>
        </div>
        <main>
          {/* <Route
            path="/Gryffindor"
            render={() => <House house={this.state.house} />}
          /> */}
        </main>
      </>
    );
  }
}

export default Home;
