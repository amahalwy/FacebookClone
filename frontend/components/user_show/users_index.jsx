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

    if (this.props.users.length < 2) {
      return '';
    } else {
      return (
        <div>
          <NavBarContainer/>
          <div className='users-index-div'>
            {/* WILL INSERT FRIENDING COMPONENT HERE */}
            <div className='left-users-menu'>USER REQUESTS AND MENU</div>
            <div className='feed-container'>FEED</div>
            <div className='users-list'>
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
          </div>
        </div>
      )
    }
  }
}

export default UsersIndex;