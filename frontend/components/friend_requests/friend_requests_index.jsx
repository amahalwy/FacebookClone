import React from 'react'
import FriendRequestItem from './friend_request_item';

class FriendRequestsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserFriendRequests(this.props.currentUser.id);
    debugger;
  }

  render() {
    debugger
    return (
      <div>
        <ul>
        {this.props.friendRequests.map((request, i) => {
          return (
            <FriendRequestItem
              currentUser={this.props.currentUser}
              postFriendship={this.props.postFriendship}
              request={request}
              requestor={request.requestor}
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
