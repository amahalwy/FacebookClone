import React from 'react'
import { Link } from 'react-router-dom';

const UsersIndexItem = props => (
  <li>
    <div className='users-index-card'>
      <Link to={`/users/${props.user.id}`}>{props.user.firstName} {props.user.lastName}</Link>
    </div>
  </li>
)

export default UsersIndexItem;