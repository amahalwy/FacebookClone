import React from 'react'

export default props => {
  
  const friendship = props.friendship;
  return (
    <div className='profile-friendship-card'>
      <div className='profile-friendship-image'>
        <img src={friendship.profilePhoto} alt=""/>
      </div>
      <div className='profile-friendship-name-container'>
        <p className='profile-friendship-name'>
          {friendship.firstName} {friendship.lastName}
        </p>
      </div>
    </div>
  )
}
