import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {postFriendship} from '../../actions/friendship_actions';
import {deleteFriendRequest} from '../../actions/friend_request_actions';

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleAccept = () =>{
    dispatch(postFriendship(currentUser.id, props.request.requestorId));
    dispatch(deleteFriendRequest(props.request.id));
  }

  const handleDecline = () => {
    dispatch(deleteFriendRequest(props.request.id));
  }

  return (
    <li className='request-card'>
      <img src={props.request.profilePhoto} alt="" className='request-card-image'/>
      <Link to={`/users/${props.request.requestorId}`} className='user-profile-link'>
        {props.request.firstName} {props.request.lastName}
      </Link>
      <button onClick={handleAccept} className='request-button button-accept'>Accept</button>
      <button onClick={handleDecline} className='request-button button-decline'>Decline</button>
    </li>
  )
}