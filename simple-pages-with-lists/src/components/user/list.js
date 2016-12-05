import React, {Component} from 'react'


class UserListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var fullNames = this.props.names.map(function(name) {
      return <li key={name}> {name} </li>;
    });
    return (
      <div>
        <h3>Full names</h3>
        <p>{this.props.description}</p>
        <ul>
          {fullNames}
        </ul>
      </div>
    )
  }
}

module.exports = UserListView