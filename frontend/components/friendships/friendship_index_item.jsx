import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  
  return (
    <li className='friendship-card'>
      <img src={props.friendship.profilePhoto} alt="" className='friendship-card-image'/>
      <Link to={`/users/${props.friendship.friendId}`} className='user-profile-link'>
        {props.friendship.firstName} {props.friendship.lastName}
      </Link>
    </li>
  )
}