import React from 'react'
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {

  handleDelete(){
    this.props.deleteComment(this.props.comment.id)
    .then(() => this.props.fetchUserPosts(this.props.currentUser.id))
  }

  render() {
    return (
      <div className='comment-card'>
        <div className='comment-avatar'>
        </div>
        <div className='comment-body'>
          <div className='comment-user-name'>
            <Link to={`/users/${this.props.comment.authorId}`}>{this.props.comment.authorFirstName} {this.props.comment.authorLastName}</Link>
          </div>
          <div className='comment-text'>
            <span>{this.props.comment.body}</span>
          </div>
        </div>
        <div className='comment-delete-button'>
          <button onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;