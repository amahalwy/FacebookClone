import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FriendRequestItem from './friend_request_item';
import {
  clearFriendRequests,
} from "../../actions/friend_request_actions";

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const requests = useSelector(state => Object.values(state.entities.friendRequests));
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearFriendRequests());
    }
  }, [])

  if (!currentUser) return '';
  return (
    <div>
      <ul className='requests-list'>
      {requests.map(request => {
        return (
          <FriendRequestItem
            currentUser={currentUser}
            request={request}
            key={request.id}
          />
        )
      })}
      </ul>
    </div>
  )
}