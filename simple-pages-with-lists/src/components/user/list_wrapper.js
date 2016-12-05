import React, {Component} from 'react'
import { Link } from 'react-router'
import UserListView from './list.js'

class UserListWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      group: 'Students',
      users: ['Pham Cong Dinh', 'Danny Murphy', 'Jackie Lee']
    }
  }

  render() {
    return (
      <div>
        <h3>Name: {this.state.group}</h3>
        <UserListView names={this.state.users} />
        <p>Back to <Link to="/">Home</Link></p>
      </div>
    )
  }
}

module.exports = {
  UserListWrapper: UserListWrapper,
};
