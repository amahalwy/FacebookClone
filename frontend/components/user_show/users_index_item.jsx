import React from 'react'
import { Link } from 'react-router-dom';

const UsersIndexItem = props => {
  // debugger
    return (
    <li>
      {/* <p>Hi {props.user.firstName} {props.user.lastName}; this is your email: {props.user.email}</p> */}
        <Link to={`/users/${props.user.id}`} className='user-profile-link'>{props.user.firstName} {props.user.lastName}</Link>
    </li>
    )
}

export default UsersIndexItem;