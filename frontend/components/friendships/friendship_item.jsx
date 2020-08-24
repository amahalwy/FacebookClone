import React from 'react';
import { Link } from 'react-router-dom';

const FriendshipItem = props => {
  return (
  <li>
    <Link to={`/users/${props.friend.friendId}`} className='user-profile-link'>{props.friend.firstName} {props.friend.lastName}</Link>
  </li>
  )
}
export default FriendshipItem;