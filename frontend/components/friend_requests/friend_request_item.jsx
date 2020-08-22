import React from 'react';
import { Link } from 'react-router-dom';

const FriendRequestItem = props =>{
  // debugger
  return (
    <li>
      <div className='request-user-card'>
        <Link to={`/users/${props.requestor.id}`}>{props.requestor.firstName} {props.requestor.lastName}</Link>
      </div>
    </li>
  )
}

export default FriendRequestItem;