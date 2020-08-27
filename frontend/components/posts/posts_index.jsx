import React from 'react'
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {
          this.props.posts.map(post => {
            return (
              <PostIndexItem
                key={post.id}
                history={this.props.history}
                post={post}
                deleteComment={this.props.deleteComment}
                createComment={this.props.createComment}
                currentUser={this.props.currentUser}
                fetchUserPosts={this.props.fetchUserPosts}
                fetchPostComments={this.props.fetchPostComments}
              />
            )
          })
        }
        </ul>
      </div>
    )
  }
}
export default PostsIndex