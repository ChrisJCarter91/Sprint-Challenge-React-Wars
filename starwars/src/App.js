import React, { Component } from 'react';
import StarWarsCharacter from './components/StarWarsCharacter';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      charData: [],
      name: '',
      title: '',
      image: '',
      about: '',
    };
  }

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
        [event.target.name]: event.target.value
    });
  };


  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  addChar = event => {
    event.preventDefault();
    const newChar ={
        name: this.state.name,
        title: this.state.title,
        img: this.state.image,
        about: this.state.about,
    };
    this.setState({
        charData: [...this.state.charData, newChar],
        name: '',
        title: '',
        image: '',
        about: '',
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Empire Member</h1>

        <div className="char-list">
          {this.state.charData.map(charFromMap => (
            <StarWarsCharacter charOnProps={charFromMap} />
             ))}
        </div>

        <form onSubmit={this.addChar}>
          <input
            placeholder='Name'
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
          />

          <input
           placeholder='Title'
           onChange={this.handleChanges}
           value={this.state.title}
           name="title"
          />

          <input
            placeholder='Image'
            onChange={this.handleChanges}
            value={this.state.image}
            name="image"
          />

          <input
            placeholder='About'
            onChange={this.handleChanges}
            value={this.state.title.about}
            name="about"
            /> 
            <button>Enlist Empire Member</button>
        </form>

      </div>
    );
  }
}

export default App;
