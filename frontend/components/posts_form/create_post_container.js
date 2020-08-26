import {connect} from 'react-redux';
import { createPost } from '../../actions/post_actions';
import CreatePostForm from './create_post_form';

const mapStateToProps = state => ({
  post: {
    user_id: '',
    body: ''
  },
  formType: 'Create Post',
  buttonText: 'Post',
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm)