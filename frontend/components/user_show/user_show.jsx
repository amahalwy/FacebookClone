import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DynamicModal from '../modal/dynamic_modal';
import NavBar from '../navbar/navbar';
import ProfileButton from './profile_button';
import PostIndex from '../posts/posts_index';
import CreatePostForm from '../posts_form/create_post_form';
import FriendshipItem from '../friendships/friendship_profle_card';
import { fetchUser, clearShow, updateUserPhoto, getCurrentUser } from '../../actions/user_actions';
import {clearPosts, fetchUserPosts} from '../../actions/post_actions';
import {clearFriendships, fetchFriendships} from '../../actions/friendship_actions';
import { clearFriendRequests } from '../../actions/friend_request_actions';

export default props => {
  const showPageModal = "show";
  const user = useSelector(state => state.entities.userShow);
  const currentUser = useSelector(state => state.session.user)
  let profilePhoto = user.profilePhoto;
  let coverPhoto = user.coverPhoto;

  useEffect(() => {
    if (profilePhoto === undefined) {
      dispatch(fetchUser(props.match.params.userId));
      dispatch(getCurrentUser(currentUser.id))
      dispatch(fetchUserPosts(props.match.params.userId));
      dispatch(fetchFriendships(props.match.params.userId));
    }
    return () => {
      if (profilePhoto !== undefined) {
        dispatch(clearShow());
        dispatch(clearPosts());
        dispatch(clearFriendships());
        dispatch(clearFriendRequests());
      }
    }
  }, [props.match.params.userId, profilePhoto])

  const friendships = useSelector(state => Object.values(state.entities.friendships));
  const [openModal, setModal] = useState(false);
  
  const dispatch = useDispatch();
  
  const photoProfileUpload = React.createRef();
  const photoCoverUpload = React.createRef();
  
  const handleProfile = () => {
    const formData = new FormData();
    formData.append('user[profile_photo]', profilePhoto);
    dispatch(updateUserPhoto(user.id, formData));
  }
  
  const handleCover = () =>{
    const formData = new FormData();
    formData.append('user[cover_photo]', coverPhoto);
    dispatch(updateUserPhoto(user.id, formData));
  }

  const coverPhotoUpload = () => {
    photoCoverUpload.current.click();
  }
  
  const profilePhotoUpload = () => { 
    photoProfileUpload.current.click()
  }

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };
  
  const renderOnMind = () => {
    if (currentUser.id !== user.id && (friendships.every(friendship => friendship.friendId !== currentUser.id) || friendships.length === 0) ) {
      return ''
    } else 
    // debugger
    if (currentUser.id !== user.id && 
      friendships.every(friendship => friendship.friendId === currentUser.id) && 
      friendships.length !== 0) {
      return (
        <div className='post-on-your-mind-container'>
          <div className='post-on-your-mind'>
            <div className='post-input-click'>
              <div className='post-input-photo'>
                <img src={currentUser.profilePhoto} alt=""/>
              </div>
              <div className='post-actual-input' onClick={showModal}>Write something to {user.firstName}</div>

            </div>
          </div>     
        </div>
      )
    } else if (currentUser.id === user.id) {
      return (
        <div className='post-on-your-mind-container'>
          <div className='post-on-your-mind'>
            <div className='post-input-click'>
              <div className='post-input-photo'>
                <img src={currentUser.profilePhoto} alt=""/>
              </div>
              <div className='post-actual-input' onClick={showModal}>What's on your mind, {currentUser.firstName}?</div>

            </div>
          </div>     
        </div>
      )
    }

  }

  const renderProfile = () => {
    if (user.id === currentUser.id) {
      return (
        <button onClick={profilePhotoUpload} className='camera-circle'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="camera-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
          <input
            type="file"
            className='button-file'
            ref={photoProfileUpload}
            onChange={e => {
                profilePhoto = e.currentTarget.files[0]
                handleProfile()
              }
            }
          />
        </button>
      )
    } else {
      return '';
    }
  }

  const renderCover = () => {
    if (user.id === currentUser.id) {
      return (
        <button className='edit-cover-photo' onClick={coverPhotoUpload}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera" className="camera-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>
          <input 
            type="file" 
            className='button-file' 
            ref={photoCoverUpload}
            onChange={e => {
                coverPhoto = e.currentTarget.files[0]
                handleCover()
              }
            }
          />
            Edit cover photo
        </button>
      )
    } else {
      return '';
    }
  }
  
  if (Object.values(user).length <= 0 || Object.values(currentUser).length <= 0) return '';
  
  return (
    <div>
      <NavBar
        currentUser={currentUser}
        history={props.history}
        match={props.match}
        location={props.location}
      />
      <section className='cover-photo-section'>
        <div className='cover-photo-container'>
          <img className='cover-photo-img' 
            src={user.coverPhoto} 
            alt="Cover Image" 
          />
          <div className='profile-pic-container'> 
            <img 
              className='profile-photo-img'
              src={user.profilePhoto} 
              alt="Profile Image" 
            />
            {renderProfile()}
          </div>
          {renderCover()}
        </div>


        <div className='under-cover-info-container' > 
          <div className='under-cover-info'>
            <div className='user-name'>{user.firstName} {user.lastName}</div>
          </div>

          <div className='under-cover-main'>
            <nav className='under-cover-left-nav'>
              <div className='under-cover-timeline'>
                <span>Timeline</span>
              </div>
            </nav>
            
            <nav className='under-cover-right-nav'>  
              <div className='right-nav-divs'>
                <ProfileButton 
                  user={user} 
                  friendships={friendships}
                />
              </div>
            </nav>
          </div>
        </div>
        
      </section>

      {/* Profle body section */}
      <section className='profile-body-section'>
        <div className='profile-body'>
          <div className='profile-main-left-section'>
            <div className='profile-friends-card'>
              <div className='profile-friend-header'>Friends</div>
              <div className='profile-friendship-cards'>
                {
                  friendships.map(friendship => {
                    return (
                      <FriendshipItem 
                        friendship={friendship}
                        user={user}
                        history={props.history}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className='profile-main-right-section'>
            {renderOnMind()}
            
            <div className='posts-index-div'>
              <PostIndex
                history={props.history}
                user={user}
              />
            </div>
          
            <DynamicModal show={openModal} handleClose={hideModal}>
              <CreatePostForm
                history={props.history}
                match={props.match}
                location={props.location}
                hideModal={hideModal}
                user={user}
                currentUser={currentUser}
                modal={showPageModal}
              />
            </DynamicModal>

          </div>
        </div>
      </section>
    </div>
  )
}