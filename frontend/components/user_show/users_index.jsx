import React from 'react';
import UsersIndexItem from './users_index_item';
import NavBarContainer from '../navbar/navbar_container';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';
import FriendshipContainer from '../friendships/friendship_container';

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
          <NavBarContainer/>
          <div className='users-index-div'>
            {/* WILL INSERT FRIENDING COMPONENT HERE */}
            <div className='left-users-menu'>USER REQUESTS
            
              <FriendRequestsContainer 
              
              />
            </div>
            <div className='feed-container'>All Users
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
            <div className='friends-list'>
              <h1>Contacts</h1>
              <FriendshipContainer

              />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default UsersIndex;