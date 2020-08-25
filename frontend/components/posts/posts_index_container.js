import {connect} from 'react-redux'
import PostsIndex from './posts_index';
// import { fetchUserPosts, clearPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts || {})
})

export default connect(mapStateToProps, null)(PostsIndex);