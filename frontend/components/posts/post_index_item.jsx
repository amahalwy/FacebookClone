import React from 'react'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import PostDropdownContainer from '../posts_dropdown/post_dropdown_container';
import CommentIndexItem from '../comments/comment_index_item';
import CreateCommentForm from '../comment_form/create_comment_form';
import LikeButton from '../likes/like_button';

export default props => {
  const currentUser = useSelector(state => state.session.user);
  const post = props.post;
  
  const clickForm = (e) => {
    e.preventDefault();
    const form = document.querySelector('.post-comment-text');
    // const form2 = document.getElementById('post-comment-text');
    form2.click();
  }

  if (!props.post) return '';
  return (
    <li>
      <div className='post-card'>
        <div className='post-top'>
          <div className='post-header'>
            <div className='post-header-top'>
              <div className='post-header-img'>
                <img src={post.authorProfilePhoto} alt=""/>
              </div>
              <div className='post-header-info'>
                <span>
                  <Link to={`/users/${post.authorId}`}>{post.authorFirstName} {post.authorLastName}</Link>
                  <p className='post-header-date'>Date posted</p>
                </span>
                  <PostDropdownContainer 
                    post={post}
                  />
              </div>
            </div>
          </div>

          <div className='post-body'>
            <p className='post-body-text'>{post.body}</p>
          </div>
          {/* <div className='post-photo'>

          </div> */}

        </div>

        <div className='post-buttons'>
          <div className='post-buttons-container'>
            <LikeButton
              post={props.post}
            />
              
            <div className='post-buttons-hover post-buttons-comment' onClick={clickForm}>
              <span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="comment-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
                <p>Comment</p>
              </span>
            </div>
          </div>
        </div>

        <div className='posts-comments'>
          {post.comments.map(comment => {
            return (
              <CommentIndexItem
                key={comment.id}
                comment={comment} 
                currentUser={currentUser}
              />
            )
          })}
        </div>

        <div className='post-comment'>
          <div className='comment-container'>
            <div className='post-comment-avatar'>
              <img src={currentUser.profilePhoto} alt=""/>
            </div>
              <CreateCommentForm
                history={props.history}
                post={post}
                currentUser={currentUser}
              />
          </div>
        </div>

      </div>
    </li>
  )
}