import {connect} from 'react-redux'
import PostsIndex from './posts_index';
import { deleteComment, createComment, fetchPostComments } from '../../actions/comment_actions';
import { fetchUserPosts } from '../../actions/post_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts || {}),
})

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    createComment: comment => dispatch(createComment(comment)),
    fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
    fetchPostComments: postId => dispatch(fetchPostComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);