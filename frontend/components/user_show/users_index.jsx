import React from 'react';
import UsersIndexItem from './users_index_item';
import NavBarContainer from '../navbar/navbar_container';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';

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
            <div className='left-users-menu'>USER REQUESTS AND MENU
            
              <FriendRequestsContainer 
              
              />
            </div>
            <div className='feed-container'>FEED


              {/* Testing profilebutton functionality */}
              {/* 
              
                Should be able to click on the button and do some action

              */}



            </div>
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