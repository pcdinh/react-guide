import React, {Component} from 'react'
import { Link } from 'react-router'
import UserListView from './list.js'

class UserListWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      group: 'Students',
      description: "Students who participate in Advanced Data Analysis course",
      users: ['Pham Cong Dinh', 'Danny Murphy', 'Jackie Lee']
    }
  }

  render() {
    return (
      <div>
        <h3>Group: {this.state.group}</h3>
        <UserListView names={this.state.users} description={this.state.description}/>
        <p>Back to <Link to="/">Home</Link></p>
      </div>
    )
  }
}

module.exports = {
  UserListWrapper: UserListWrapper,
};
