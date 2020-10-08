import React from 'react'
import { Link } from 'react-router-dom';

export default props => (
  <li>
    <div className='users-index-card'>
      <img src={props.user.profilePhoto} alt="" className='friendship-card-image'/>
      <Link to={`/users/${props.user.id}`} className='user-profile-link'>{props.user.firstName} {props.user.lastName}</Link>
    </div>
  </li>
)