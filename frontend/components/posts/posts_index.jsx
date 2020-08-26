import React from 'react'
import PostIndexItem from './post_index_item';

class PostsIndex extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {
          this.props.posts.map(post =>{
            return (
              <PostIndexItem
                key={post.id}
                post={post}
                deletePost={this.props.deletePost}
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