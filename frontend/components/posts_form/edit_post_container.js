import { connect } from 'react-redux';
import { fetchUserPosts, updatePost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  formType: 'Update Post',
  buttonText: 'Update'
})

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)