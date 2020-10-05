import React from 'react'
import {Link} from 'react-router-dom';
import PostDropdownContainer from '../posts_dropdown/post_dropdown_container';
import CommentIndexItem from '../comments/comment_index_item';
import CreateCommentForm from '../comment_form/create_comment_form';

class PostIndexItem extends React.Component {

  render() {
    const post = this.props.post;
    
    return (
      <li>
        <div className='post-card'>

          <div className='post-top'>
            <div className='post-header'>

              <div className='post-header-top'>

                <div className='post-header-img'>
                  <img src="" alt=""/>
                  <p><strong></strong></p>
                </div>

                <div className='post-header-info'>
                  <span>
                    <Link to={`/users/${post.authorId}`}>{post.authorFirstName} {post.authorLastName}</Link>
                    <p className='post-header-date'>Date posted</p>
                  </span>
                    <PostDropdownContainer 
                      post={this.props.post}
                    />
                </div>
              </div>
            </div>

            <div className='post-body'>
              <p className='post-body-text'>{post.body}</p>
            </div>

            <div className='post-photo'>

            </div>

          </div>

          <div className='post-buttons'>
            <div className='post-buttons-container'>
              <div className='post-buttons-hover post-buttons-like'>
                <span>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" className="thumbs-up-svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg>
                  <p>Like</p>
                </span>

              </div>
                
              <div className='post-buttons-hover post-buttons-comment'>
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
                  currentUser={this.props.currentUser}
                  fetchUserPosts={this.props.fetchUserPosts}
                  deleteComment={this.props.deleteComment}
                />
              )
            })}
          </div>

          <div className='post-comment'>
            <div className='comment-container'>
              <div className='post-comment-avatar'>
                {/* <img src="" alt=""/> */}
              </div>
                <CreateCommentForm
                  history={this.props.history}
                  createComment={this.props.createComment}
                  post={post}
                  currentUser={this.props.currentUser}
                  fetchUserPosts={this.props.fetchUserPosts}
                />
            </div>
          </div>

        </div>
      </li>
    )

  }
}

export default PostIndexItem;