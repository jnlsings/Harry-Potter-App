import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharStats from './components/CharStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      houses: []
    };
  }
  componentDidMount() {
    const apiKey = process.env.REACT_APP_HP_KEY;
    const url = `https://www.potterapi.com/v1/houses?key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ houses: [response] });
      });
  }
  // showSelectedCharacter = selectedCharacter => {
  //   this.setState({ selectedCharacter });
  // };

  // showApiHouses = apiHouses => {
  //   this.setState({ apiHouses });
  // };

  render() {
    return (
      <div>
        <header className="app-header">
          <nav>
            <Link className="home-link" to="/">
              Harry Potter App
            </Link>
          </nav>
        </header>
        <div>
          {/* {this.state.houses.map(house => (
            <Home key={house.name} house={house.name} />
          ))} */}
        </div>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home houses={this.state.houses} />}
            />
            {/* <Route
              exact
              path="/CharStats/:name"
              render={() => (
                <CharStats selectedCharacter={this.state.selectedCharacter} />
              )}
            /> */}
          </Switch>
        </main>
        {/* <Home /> */}
        <CharStats />
      </div>
    );
  }
}

export default App;
