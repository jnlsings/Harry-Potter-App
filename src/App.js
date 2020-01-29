import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import House from './components/House';
import CharStats from './components/CharStats';
import Character from './components/Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    const apiKey = process.env.REACT_APP_HP_KEY;
    const housesUrl = `https://www.potterapi.com/v1/houses?key=${apiKey}`;

    fetch(housesUrl)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ houses: [response] });
      });
  }

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
            <Route
              exact
              path="/CharStats"
              render={() => <CharStats characters={this.state.characters} />}
            />
            <Route
              exact
              path="/:house"
              render={props => <House {...props} house={this.state.houses} />}
            />
            <Route
              exact
              path="/:character"
              render={() => <Character character={this.state.characters} />}
            />
          </Switch>
        </main>
        {/* <CharStats /> */}
      </div>
    );
  }
}

export default App;
