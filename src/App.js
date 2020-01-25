import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharStats from './components/CharStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedCharacter: '',
      apiHouses: []
    };
  }

  // showSelectedCharacter = selectedCharacter => {
  //   this.setState({ selectedCharacter });
  // };

  showApiHouses = apiHouses => {
    this.setState({ apiHouses });
  };

  render() {
    return (
      <div>
        <header className="app-header">
          <nav>
            <Link to="/">Harry Potter App</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home showApiHouses={this.showApiHouses} />}
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
