import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteComment,
  createComment,
  fetchPostComments,
} from "../../actions/comment_actions";
import {fetchUserPosts} from '../../actions/post_actions';

export default props => {

  const dispatch = useDispatch();

  const handleDelete = () =>{
    dispatch(deleteComment(props.comment.id));
    dispatch(fetchUserPosts(props.currentUser.id));
  }

  const renderButton = () =>{
    if (props.comment.authorId === props.currentUser.id) {
      return (
        <div className='comment-delete-button'>
          <button onClick={handleDelete}>
            Delete
          </button>
        </div >
      )
    } else {
      return '';
    }
  }

  return (
    <div className='comment-card'>
      <div className='comment-avatar'>
        <img src={props.comment.profilePhoto} alt=""/>
      </div>
      <div className='comment-body'>
        <div className='comment-user-name'>
          <Link to={`/users/${props.comment.authorId}`}>{props.comment.authorFirstName} {props.comment.authorLastName}</Link>
        </div>
        <div className='comment-text'>
          <span>{props.comment.body}</span>
        </div>
      </div>
      {renderButton()}
    </div>
  )
}