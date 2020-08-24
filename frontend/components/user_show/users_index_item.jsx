import React from 'react'
import { Link } from 'react-router-dom';

const UsersIndexItem = props => (
  <li>
      <Link to={`/users/${props.user.id}`}>{props.user.firstName} {props.user.lastName}</Link>
  </li>
)

export default UsersIndexItem;