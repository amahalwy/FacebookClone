import React from 'react'
import FriendRequestItem from './friend_request_item';

class FriendRequestsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserFriendRequests(this.props.currentUser.id);
  }

  componentWillUnmount() {
    this.props.clearFriendRequests();
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.friendRequests.map((request, i) => {
          return (
            <FriendRequestItem
              currentUser={this.props.currentUser}
              deleteFriendRequest={this.props.deleteFriendRequest}
              postFriendship={this.props.postFriendship}
              request={request}
              key={i}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}


export default FriendRequestsIndex;
