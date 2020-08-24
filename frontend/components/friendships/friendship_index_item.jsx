import React from 'react';
import { Link } from 'react-router-dom';

const FriendshipItem = props => {
  return (
  <li>
      <Link to={`/users/${props.friendship.friendId}`} className='user-profile-link'>{props.friendship.firstName} {props.friendship.lastName}</Link>
  </li>
  )
}
export default FriendshipItem;