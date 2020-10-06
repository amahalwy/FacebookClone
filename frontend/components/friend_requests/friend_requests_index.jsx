import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FriendRequestItem from './friend_request_item';
import {
  clearFriendRequests,
  fetchUserFriendRequests,
} from "../../actions/friend_request_actions";

export default props => {
  const currentUser = useSelector((state) => state.session.user);
  // const friendRequests = useSelector(state => Object.values(state.entities.friendRequests));
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUserFriendRequests(currentUser.id));
    return () => {
      dispatch(clearFriendRequests());
    }
  }, [])

  if (!currentUser) return '';
  return (
    <div>
      <ul>
      {currentUser.requestsAsReceiver.map(request => {
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