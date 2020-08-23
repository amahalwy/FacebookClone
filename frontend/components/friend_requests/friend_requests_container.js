import {connect} from 'react-redux';
import FriendRequestsIndex from './friend_requests_index';
import { fetchUserFriendRequests } from '../../actions/friend_request_actions';

const mapStateToProps = state => {

  return {
    friendRequests: Object.values(state.entities.friendRequests.requests || {}),
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserFriendRequests: userId => dispatch(fetchUserFriendRequests(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestsIndex)
