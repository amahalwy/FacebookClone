import {connect} from 'react-redux';
import UserShow from './user_show';
import { fetchUser, createUserPhoto} from '../../actions/user_actions.js';
import { postFriendRequest } from '../../actions/friend_request_actions'
import { fetchUserPosts, clearPosts } from '../../actions/post_actions';
import {logout} from '../../actions/session';

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  match: ownProps.match,
  params: ownProps.params,
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout()),
  postFriendRequest: (requestor_id, receiver_id) => dispatch(postFriendRequest(requestor_id, receiver_id)),
  fetchUserPosts: userId => dispatch(fetchUserPosts(userId)),
  clearPosts: () => dispatch(clearPosts()),
  createUserPhoto: formData => dispatch(createUserPhoto(formData))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)