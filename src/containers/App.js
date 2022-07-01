import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundry";
import '../App.css';

function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

  const [robots, setRobots] = useState()
  const [searchfield, setSearchfield] = useState()
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users })) 
    // }

  const  onSearchChange = (event) => {
        useState(event.target.value)
    }

  const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  return !robots.length? 
  <h1>Loading</h1>:
  (
      <div className="tc">
          <h1 className='f1'>RobotsFriend</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
              <ErrorBoundary>
                  <CardList robots ={filterRobots}/>
              </ErrorBoundary>
          </Scroll>
      </div>
  )
}

export default App;