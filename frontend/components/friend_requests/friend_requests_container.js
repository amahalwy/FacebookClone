import {connect} from 'react-redux';
import FriendRequestsIndex from './friend_requests_index';
import { fetchUserFriendships } from '../../actions/friend_request_actions';

const mapStateToProps = state => {

  return {
    friendRequests: Object.values(state.entities.friendRequests.requests || {}),
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserFriendships: userId => dispatch(fetchUserFriendships(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsIndex)
