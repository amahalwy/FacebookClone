import React from 'react';
import UsersIndexItem from './users_index_item';
import NavBarContainer from '../navbar/navbar_container';

class UsersIndex extends React.Component {
  // If need to hold currentUser, could do it in the constructor to pass into navbar
  // constructor(props) {
  //   super(props);
  //   this.currentUser = this.props.users[0];
  // }
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    
    
    debugger;
    
    if (this.props.users.length < 2) {
      return '';
    } else {
      return (
        <div className='users-index-div'>
          <NavBarContainer/>
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