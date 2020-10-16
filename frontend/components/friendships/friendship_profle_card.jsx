import React from 'react'
import { Link } from 'react-router-dom';

export default props => {
  
  const friendship = props.friendship;
  // debugger
  return (
    <div className='profile-friendship-card'>
      <div className='profile-friendship-image'>
        <img src={friendship.profilePhoto} alt=""/>
      </div>
      <div className='profile-friendship-name-container'>
        <Link to={`/users/${friendship.friendId}`} className='profile-friendship-name'>
          {friendship.firstName} {friendship.lastName}
        </Link>
      </div>
    </div>
  )
}
