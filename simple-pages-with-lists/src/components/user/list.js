import React, {Component} from 'react'


class UserListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var listItems = this.props.names.map(function(user) {
      return <li key={user}> {user} </li>;
    });
    return (
      <div>
        <h3> Users </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

module.exports = UserListView