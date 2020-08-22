import React from 'react'
import FriendRequestItem from './friend_request_item';

class FriendRequestsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger;
    this.props.fetchUserFriendships(this.props.currentUser.id);
    // debugger;
  }

  render() {
    // debugger;
    return (
      <div>
        <ul>
        {this.props.friendRequests.map(request => {
          return (
            <FriendRequestItem
              requestor={request.requestor}
              key={request.id}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}


export default FriendRequestsIndex;
