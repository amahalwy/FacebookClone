import {connect} from 'react-redux';
import { createPost, updatePost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  updatePost: postId => dispatch(updatePost(postId))
  // createPost: (user_id, post) => dispatch(createPost(user_id, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);