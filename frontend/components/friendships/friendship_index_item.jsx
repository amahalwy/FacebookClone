import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  
  const handleClick = () => {
    props.history.push(`/users/${props.friendship.friendId}`);
  }

  return (
    <li className='friendship-card' onClick={handleClick}>
      <img src={props.friendship.profilePhoto} alt="" className='friendship-card-image'/>
      <a className='user-friend-link'>
        {props.friendship.firstName} {props.friendship.lastName}
      </a>
    </li>
  )
}