import React from 'react'
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id)
    .then(() => this.props.fetchUserPosts(this.props.currentUser.id))
  }

  renderButton() {
    if (this.props.comment.authorId === this.props.currentUser.id) {
      return (
        <div className='comment-delete-button'>
          <button onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </div >
      )
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className='comment-card'>
        <div className='comment-avatar'>
          <img src={this.props.comment.profilePhoto} alt=""/>
        </div>
        <div className='comment-body'>
          <div className='comment-user-name'>
            <Link to={`/users/${this.props.comment.authorId}`}>{this.props.comment.authorFirstName} {this.props.comment.authorLastName}</Link>
          </div>
          <div className='comment-text'>
            <span>{this.props.comment.body}</span>
          </div>
        </div>
        {this.renderButton()}
      </div>
    )
  }
}

export default CommentIndexItem;