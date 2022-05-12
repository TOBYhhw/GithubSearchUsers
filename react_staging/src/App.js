import React, { Component } from 'react'
import Search from "./component/Search/Search"
import List from "./component/List/List"
import "./App.css"
export default class App extends Component {
  state = {
    users: []
  }
  saveUsers = (users) => {
    this.setState({ users: users })
  }
  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers
        } />
        <List users={this.state.users} />
      </div>
    )
  }
}

