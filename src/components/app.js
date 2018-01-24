import React, { Component } from 'react';

import CardList from './card_list';
import SearchBox from './search_box';
import Scroll from './scroll';



class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      input: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ robots: users}))
     
  }

  handleSearchChange(e) {
    this.setState({ input: e.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.input.toLowerCase())
    })

    if (!this.state.robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox search={this.handleSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
  }
}

export default App;