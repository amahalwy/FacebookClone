import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { createPost, fetchUserPosts } from '../../actions/post_actions';

export default props => {
  const [postBody, setBody] = useState('');
  const [postPhoto, setPostPhoto] = useState('');
  const formType = 'Create Post';
  const buttonText = 'Post';
  const dispatch = useDispatch();

  const postProfileRef = React.createRef();

  let user = props.user;

  const handleSubmit = (e) => {
    e.preventDefault();


    if (user === undefined) { // Navbar      
      const post = new FormData();
      post.append('post[body]', postBody);
      post.append('post[owner_id]', props.currentUser.id);
      post.append('post[user_id]', props.currentUser.id);
      post.append('post[post_photo]', postPhoto);

      dispatch(createPost(post));
      dispatch(fetchUserPosts(props.currentUser.id));
      setBody('');
      props.hideModal();
      props.history.push(`/users/${props.currentUser.id}`);
    }

    if ((user && props.currentUser) && (props.currentUser.id === user.id)) { // Current user's page
      const post = new FormData();
      post.append('post[body]', postBody);
      post.append('post[owner_id]', props.currentUser.id);
      post.append('post[user_id]', props.currentUser.id);
      post.append('post[post_photo]', postPhoto);

      dispatch(createPost(post));
      dispatch(fetchUserPosts(props.currentUser.id));
      setBody('');
      props.hideModal();
      props.history.push(`/users/${props.currentUser.id}`);

    } else if ((user && props.currentUser) && (props.currentUser.id !== user.id)) { // Not current user's page
      const post = new FormData();
      post.append('post[body]', postBody);
      post.append('post[owner_id]', props.currentUser.id);
      post.append('post[user_id]', props.user.id);
      post.append('post[post_photo]', postPhoto);

      dispatch(createPost(post));
      setBody('');
      dispatch(fetchUserPosts(props.user.id));
      props.hideModal();
    }
  }

  const handleClose = () => {
    props.hideModal();
    setTimeout(() => {
      setBody('');
    }, 10);
  }

  const clickInput = () => {
    postProfileRef.current.click()
  }

  if (!props.currentUser) return '';
  
  return (
    <div className='post-form-card'>
      <div className='post-form-header'>
        <div>
          <span>
            <h1>{formType}</h1>
          </span>
          <span>
            <button onClick={handleClose}>
              <p>X</p>
            </button>
          </span>
        </div>
        <div className='post-dividor'></div>
      </div>
      <div className='post-form-user'>
        <div className='post-form-user-image'>
          <img src={props.currentUser.profilePhoto} alt=""/>
        </div>
        <div className='post-form-user-name'>
          <p>{props.currentUser.firstName} {props.currentUser.lastName}</p>
          <div className='post-form-friends-click'>
            <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="friends-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></div>
            <p className='friends-p'>Friends</p>
            <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></div>
          </div>
        </div>
      </div>
      <form className='post-form'>

          <textarea 
          type="text"
          onChange={e => setBody(e.currentTarget.value)}
          placeholder= "What's on your mind?"
          ></textarea>
        <div className='add-to-your-post'>
          {/* <input 
            type="file"
            onChange={e => setPostPhoto(e.currentTarget.files[0])}
            buttonText="Choose Image"
          /> */}
          <input type="button" value="Add an image instead" className="file-upload-input" onClick={clickInput} />
          <input 
            type="file" 
            className="file"
            onChange={e => setPostPhoto(e.currentTarget.files[0])}
            // onChange={handleFile}
            ref={postProfileRef}
          />
        </div>
        <div className='post-button'>
          <button onClick={handleSubmit}>
            <span>
              {buttonText}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}