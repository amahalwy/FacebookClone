import React from 'react'
import PostIndexItem from './post_index_item';
import { reset } from 'redux-form'

class PostsIndex extends React.Component {

  componentWillUnmount(){
    this.props.clearPosts();
  }

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
                fetchPost={this.props.fetchPost}
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