import React from 'react'

export default props => {
  
  const friendship = props.friendship;
  
  const clickRedirect = () => {
    props.history.push(`/users/${friendship.friendId}`);
  }
  
  if (props.friendship.friendId === props.user.id) return '';
  return (
    <div className='profile-friendship-card' onClick={clickRedirect}>
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
