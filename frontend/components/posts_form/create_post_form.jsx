import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, fetchUserPosts } from '../../actions/post_actions';

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const [postBody, setBody] = useState('');
  const formType = 'Create Post';
  const buttonText = 'Post';
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      body: postBody,
      user_id: currentUser.id,
    }
    dispatch(createPost(post));
    dispatch(fetchUserPosts(currentUser.id));
    props.hideModal();
    props.history.push(`/users/${currentUser.id}`);
  }

  return (
    <div className='post-form-card'>
      <div className='post-form-header'>
        <div>
          <span>
            <h1>{formType}</h1>
          </span>
          <span>
            <button onClick={props.hideModal}><p>X</p></button>
          </span>
        </div>
        <div className='post-dividor'></div>
      </div>
      <div className='post-form-user'>
        <div className='post-form-user-image'>
          {/* <img src={this.props.currentUser.profilePhoto} alt=""/> */}
        </div>
        <div className='post-form-user-name'>
          {/* <p>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</p> */}
          <div className='post-form-friends-click'>
            <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="friends-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></div>
            <p className='friends-p'>Friends</p>
            <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" className="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg></div>
          </div>
        </div>
      </div>
      <form className='post-form'>
        <div className='post-form-text'>

          <textarea 
          type="text"
          onChange={e => setBody(e.currentTarget.value)}
          placeholder= "What's on your mind?"
          ></textarea>
        </div>
        {/* <div className='add-to-your-post'>
          <div className='post-add-to-post'>Add to Your Post</div>
          <div className='post-icons'>
            <div className='add-to-post-buttons'>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" className="smile-icon form-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>
            </div>
            <div className='add-to-post-buttons'>
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="image" className="image-icon form-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
              <input 
              type="file"
              className='button-file'/>
            </div>
          </div>
        </div> */}
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