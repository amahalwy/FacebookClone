import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  handleAccept(){
    this.props.postFriendship(this.props.currentUser.id, this.props.request.requestorId);
    this.props.deleteFriendRequest(this.props.request.requestId)
  }

  handleDecline(){
    this.props.deleteFriendRequest(this.props.request.requestId)
  }

  render(){
    return (
      <li>
        <div className='request-user-card'>
          <Link to={`/users/${this.props.request.requestorId}`}>{this.props.request.firstName} {this.props.request.lastName}</Link>
          <button onClick={this.handleAccept} className='request-button'>Accept</button>
          <button onClick={this.handleDecline} className='request-button'>Decline</button>
        </div>
      </li>
    )
  }
}

export default FriendRequestItem;