import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UsersIndexItem from './users_index_item';
import NavBarContainer from '../navbar/navbar_container';
import FriendRequestsContainer from '../friend_requests/friend_requests_container';
import FriendshipContainer from '../friendships/friendship_container';
import {fetchUsers} from '../../actions/user_actions';

export default props => {
  const users = useSelector(state => state.entities.users)
  const currentUser = useSelector(state => state.entities.session)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  if (users.length < 2) return '';
  debugger
  return (
    <div>
      <NavBarContainer
        history={props.history}
        match={props.match}
        location={props.location}
      />
      <div className='users-index-div'>
        <div className='left-users-menu'>
          <h1>Friend Requests</h1>
          <FriendRequestsContainer
            history={props.history}
            match={props.match}
            location={props.location}
          />
        </div>
        <div className='feed-container'>
          <h1>All Users</h1>
        <ul>
            {/* {
              users.map(user => {
                return (
                  <UsersIndexItem
                    key={user.id}
                    user={user}
                  />
                )
              })
            } */}
          </ul>

        </div>
        <div className='friends-list'>
          <h1>Friends</h1>
          <FriendshipContainer
            history={props.history}
            match={props.match}
            location={props.location}
          />
        </div>
      </div>
    </div>
  )
}