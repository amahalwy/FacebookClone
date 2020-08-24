import {connect} from 'react-redux';
import FriendRequestsIndex from './friend_requests_index';
import { fetchUserFriendRequests, deleteFriendRequest } from '../../actions/friend_request_actions';
import { postFriendship } from '../../actions/friendship_actions';

const mapStateToProps = state => {
  debugger
  return {
    friendRequests: Object.values(state.entities.friendRequests || {}),
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => ({
    fetchUserFriendRequests: userId => dispatch(fetchUserFriendRequests(userId)),
    deleteFriendRequest: requestId => dispatch(deleteFriendRequest(requestId)),
    postFriendship: (user_id, friend_id) => dispatch(postFriendship(user_id, friend_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsIndex)
