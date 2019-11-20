import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor () {
    super();

    /*this.state = {
      string : "I am in standard",
      std : 1,
      string1 : "I am in standard",
      std1 : 1
    };*/
    this.state = {
      pokedex : []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ pokedex : users}));
  }
  render() {
    return (
      <div className="App">
         {/*
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <p>{this.state.string} {this.state.std}</p>
        <p>{this.state.string} {this.state.std1}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.setState({
            std : this.state.std+1
            })
          }> Change State </button>
          <button onClick={() => this.setState({
            std1 : this.state.std1+1
            })
          }> Change State </button>
        </header>
        */
        }
        {/*
          this.state.pokedex.map(
          pokedex => <div key={pokedex.id}><p> {pokedex.name}</p></div>
          )
          */}
          {
          /*this.state.pokedex.map(
          pokedex => <CardList key={pokedex.id} name={pokedex.name}></CardList>
          )
          */}
          <CardList pokedex={this.state.pokedex}>
          </CardList>
      </div>
    );
  }
}

export default App;
