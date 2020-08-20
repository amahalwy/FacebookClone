import React from 'react';
import UsersIndexItem from './users_index_item';
import NavBarContainer from '../navbar/navbar_container';

class UsersIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
  // debugger;
    if (this.props.users.length < 2) {
      return '';
    } else {
      return (
        <div>
          {/* <NavBarContainer 
          /> */}
          <button onClick={this.props.logout}>Logout!</button>
          <h1>All users</h1>
          <ul>
            {
              this.props.users.map(user => {
                return (
                  <UsersIndexItem
                  key={user.id}
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