import {connect} from 'react-redux';
import FriendRequestsIndex from './friend_requests_index';
import { fetchUserFriendRequests } from '../../actions/friend_request_actions';
import { postFriendship } from '../../actions/friendship_actions';

const mapStateToProps = state => {

  return {
    friendRequests: Object.values(state.entities.friendRequests || {}),
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserFriendRequests: userId => dispatch(fetchUserFriendRequests(userId)),
  postFriendship: (user_id, friend_id) => dispatch(postFriendship((user_id, friend_id))),
  deleteFriendRequest: requestId => dispatch(deleteFriendRequest(requestId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsIndex)
