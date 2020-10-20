import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../navbar/navbar';
import FriendRequests from '../friend_requests/friend_requests_index';
import Friendship from '../friendships/friendship_index';
import PostIndex from '../posts/posts_index';
import DynamicModal from '../modal/dynamic_modal';
import CreatePostForm from '../posts_form/create_post_form';
import { clearUsers } from '../../actions/user_actions';
import { fetchUserFriendRequests} from '../../actions/friend_request_actions';

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const [openModal, setModal] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  useEffect(() => {
    dispatch(fetchUserFriendRequests(currentUser.id))
    return () => {
      dispatch(clearUsers());
    }
  }, [])

  if (!currentUser) return '';

  return (
    <div>
      <NavBar
        currentUser={currentUser}
        history={props.history}
        match={props.match}
        location={props.location}
      />
      <div className='users-index-div'>
        <div className='left-users-menu'>
          <h1>Friend Requests</h1>
          <FriendRequests
            history={props.history}
            match={props.match}
            location={props.location}
            currentUser={currentUser}
          />
        </div>
        <div className='feed-container'>
          <div className='post-on-your-mind-container'>
            <div className='post-on-your-mind'>
              <div className='post-input-click'>
                <div className='post-input-photo'>
                  <img src={currentUser.profilePhoto} alt="" />
                </div>
                <div className='post-actual-input' onClick={showModal}>What's on your mind, {currentUser.firstName}?</div>
              </div>
            </div>
          </div>


          <div className='posts-index-div'>
            <ul>
              <PostIndex
                history={props.history}
                user={currentUser}
              />
            </ul>
          </div>

        </div>
        <div className='friends-list'>
          <h1>Friends</h1>
          <Friendship
            history={props.history}
            match={props.match}
            location={props.location}
            currentUser={currentUser}
          />
        </div>

      </div>
      <DynamicModal show={openModal} handleClose={hideModal}>
        <CreatePostForm
          history={props.history}
          match={props.match}
          location={props.location}
          hideModal={hideModal}
          currentUser={currentUser}
        />
      </DynamicModal>

    </div>
  )
}