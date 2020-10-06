import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createComment} from '../../actions/comment_actions';
import {fetchUserPosts} from '../../actions/post_actions';

export default props => {
  const [body, setBody] = useState('');
  const postId = props.post.id;
  const userId = props.currentUser.id;

  const dispatch = useDispatch();

  // want to re-render the post item immediately upon creation and deletion of comment

  const handleSubmit = () => {
    let comment = {
      body,
      post_id: postId,
      user_id: userId
    }
    dispatch(createComment(comment));
    setTimeout(() => {
      dispatch(fetchUserPosts(props.currentUser.id));
      setBody('');
    }, 1)
  }

  const handleUserKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit();
    }
  };
  

  return (
      <form className='post-comment-form'>

        <textarea
          className='post-comment-text'
          type="text"
          value={body}
          onKeyPress={handleUserKeyPress}
          onChange={e => setBody(e.currentTarget.value)}
          placeholder='Write a comment...'
        ></textarea>
        <div className='comment-icons'>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="smile" className="smile-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"></path></svg>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="image" className="image-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
        </div>

      </form>
  )
}