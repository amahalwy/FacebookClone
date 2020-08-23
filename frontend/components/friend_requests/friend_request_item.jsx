import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }

  handleAccept(){
    this.props.postFriendship(this.props.currentUser.id, this.props.requestor.id);
    this.props.postFriendship(this.props.requestor.id, this.props.currentUser.id );
    // this.props.deleteFriendRequest()
    // Need to delete the request afterwards!!
  }

  handleDecline(){
    // this.props.deleteFriendRequest()
  }

  render(){
    return (
      <li>
        <div className='request-user-card'>
          <Link to={`/users/${this.props.requestor.id}`}>{this.props.requestor.firstName} {this.props.requestor.lastName}</Link>
          <button onClick={this.handleAccept}>Accept Request</button>
          <button onClick={this.handleDecline}>Decline Request</button>
        </div>
      </li>
    )
  }
}

export default FriendRequestItem;