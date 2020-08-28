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

    if (this.props.users.length < 2) return '';
      return (
        <div>
          <NavBarContainer
            history={this.props.history}
            match={this.props.match}
            location={this.props.location}
          />
          <div className='users-index-div'>
            <div className='left-users-menu'>
              <h1>Friend Requests</h1>
              <FriendRequestsContainer
                history={this.props.history}
                match={this.props.match}
                location={this.props.location}
              />
            </div>
            <div className='feed-container'>
              <h1>All Users</h1>
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
              <h1>Friends</h1>
              <FriendshipContainer
                history={this.props.history}
                match={this.props.match}
                location={this.props.location}
              />
            </div>
          </div>
        </div>
      )
    }
  }


export default UsersIndex;