import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: null
  //   };
  // }
  // componentDidMount() {
  //   console.log(this.props);
  //   const apiKey = process.env.REACT_APP_HP_KEY;
  //   const url = `https://www.potterapi.com/v1/houses?key=${apiKey}`;

  // fetch(url)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //     this.setState({ houses: response });
  //   });
  // }
  render() {
    console.log(this.props);
    // map over houses array
    let houseList = this.props.houses.map((name, index) => {
      let houseName = this.props.houses.name;
      console.log({ houseName });
      // let pathName = `/${house.name}`;

      return (
        <>
          <p>{houseName}</p>
          <div key={`${name}-${index}`}>
            {/* <Link to={pathName}>{house.name}</Link> */}
          </div>
        </>
      );
    });

    return (
      <div>
        <h2>Houses</h2>
        {/* <h4>{apiHouses}</h4> */}
        <p>{this.props.name}</p>
        {/* <p>{houseName}</p> */}
      </div>
    );
  }
}

// class CharStats extends Component {
//   state = {
//     loading: true,
//     person: ''
//   };

//   async componentDidMount() {
//     const url = 'https://www.potterapi.com/v1/sortingHat';
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data, loading: false });
//     console.log(data);
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loading || !this.state.person ? (
//           <div>loading...</div>
//         ) : (
//           <div>person...</div>
//         )}
//         <h1>Harry Potter individual character stats</h1>
//         <div>{this.state.person}</div>
//       </div>
//     );
//   }
//   arr;
// }

export default Home;
