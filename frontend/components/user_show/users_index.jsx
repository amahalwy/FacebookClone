import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UsersIndexItem from './users_index_item';
import NavBar from '../navbar/navbar';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';
import FriendshipContainer from '../friendships/friendship_container';
import { fetchCurrentUser} from '../../actions/session_actions';
import {fetchUsers, clearUsers} from '../../actions/user_actions';
import {clearFriendships} from '../../actions/friendship_actions';

export default props => {
  const users = useSelector(state => Object.values(state.entities.users));
  const currentUser = useSelector(state => state.session.user);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {
      dispatch(clearFriendships);
      dispatch(clearUsers());
    }
  }, [])

  if (!currentUser) return '';
  return (
    <div>
      <NavBar
        currentUser={currentUser}
      />
      <div className='users-index-div'>
        <div className='left-users-menu'>
          <h1>Friend Requests</h1>
          <FriendRequestsContainer
            history={props.history}
            match={props.match}
            location={props.location}
            currentUser={currentUser}
          />
        </div>
        <div className='feed-container'>
          <h1>All Users</h1>
        <ul>
            {
              users.map(user => {
                return (
                  <UsersIndexItem
                    key={user.id}
                    user={user}
                  />
                )
              })
            }
          </ul>

        </div>
        <div className='friends-list'>
          <h1>Friends</h1>
          <FriendshipContainer
            history={props.history}
            match={props.match}
            location={props.location}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  )
}