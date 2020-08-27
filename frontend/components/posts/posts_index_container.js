import {connect} from 'react-redux'
import PostsIndex from './posts_index';
import { deleteComment, fetchPostComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts || {}),
})

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);