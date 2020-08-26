import {connect} from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';
import PostDropdown from './post_dropdown';

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(null, mapDispatchToProps)(PostDropdown)