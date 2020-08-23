import React from 'react';
import { Link } from 'react-router-dom';

class FriendRequestItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    debugger;
    this.props.postFriendship(this.props.currentUser.id, this.props.requestor.id);
    // Need to delete the request afterwards!!
    debugger;
  }

  render(){
    return (
      <li>
        <div className='request-user-card'>
          <Link to={`/users/${this.props.requestor.id}`}>{this.props.requestor.firstName} {this.props.requestor.lastName}</Link>
          <button onClick={this.handleClick}>Accept Request</button>
        </div>
      </li>
    )
  }
}

export default FriendRequestItem;