import React,{ Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

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
      pokedex : [],
      searchField : ''
    }

    this.handelChange = this.handelChange.bind(this)
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ pokedex : users}));
  }

  handelChange = (e) => {
    this.setState({searchField : e.target.value}) 
  }
  render() {
    const {pokedex,searchField} = this.state;
    const filteredPokedex = pokedex.filter(pokedex =>
    pokedex.name.toLowerCase().includes(searchField.toLowerCase())  
    )

    return (
      <div className="App">
          <SearchBox
          placeholder="Search for Pokemon"
          handelChange={this.handelChange}
          />
          <CardList pokedex={filteredPokedex}>
          </CardList>
      </div>
    );
  }
}

export default App;
