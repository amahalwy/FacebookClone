import {connect} from 'react-redux'
import PostsIndex from './posts_index';
import { fetchPosts, fetchPost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: posts => dispatch(fetchPosts(posts)),
  fetchPost: postId => dispatch(fetchPosts(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);