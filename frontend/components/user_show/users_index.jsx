import React from 'react';
import UsersIndexItem from './users_index_item';

class UsersIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.users.length < 2) {
      return '';
    } else {
      return (
        <div>
          <h1>All users</h1>
          <ul>
            {
              this.props.users.map(user => {
                debugger
                return (
                  <UsersIndexItem
                  user={user}
                  />
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
}

export default UsersIndex;