import {connect} from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  history: ownProps.history,
  match: ownProps.match,
  params: ownProps.params,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)