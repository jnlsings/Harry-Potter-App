import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharStats from './components/CharStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacter: ''
    };
  }

  showSelectedCharacter = selectedCharacter => {
    this.setState({ selectedCharacter });
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
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        {/* <Home /> */}
        <CharStats />
      </div>
    );
  }
}

export default App;
