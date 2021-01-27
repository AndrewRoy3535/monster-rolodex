import React, { Component } from 'react';
import Cardlist from './component/card-list/cardlist.component';
import Searchbox from './component/search-box/searchbox.component';
import './App.css';
 
class App extends Component {
  constructor () {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => this.setState({monsters: res}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters =  monsters.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
        placeholder="search monsters"
        handleChange={e => this.setState({searchField: e.target.value})}/>
        <Cardlist monsters={filterMonsters}/>
      </div>
    );
  }
} 

export default App;
