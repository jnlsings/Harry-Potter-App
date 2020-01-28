import React, { Component } from 'react';
import House from './House';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.props);
    let houses = this.props.houses[0];
    console.log(houses);
    let houseList;
    if (houses) {
      houseList = houses.map((house, index) => {
        // let houseName = house.name;
        // console.log(houseName);
        return <li>{house.name}</li>;
      });
    }

    // let pathName = `/${house.name}`;

    //   return (
    //     <>
    //       <p>{houseName}</p>
    //       <div key={`${house}-${index}`}>
    //         {/* <Link to={pathName}>{house.name}</Link> */}
    //       </div>
    //     </>
    //   );
    // });

    return (
      <div>
        <h2>Houses</h2>
        {/* <h4>{apiHouses}</h4> */}
        <p>{this.props.name}</p>
        <p>{houseList}</p>
      </div>
    );
  }
}

export default Home;

//previous code from when had fetch in this file
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

//video code
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
