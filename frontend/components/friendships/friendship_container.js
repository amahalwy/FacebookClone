import {connect} from 'react-redux';
import { fetchFriendships } from '../../actions/friendship_actions';
import FriendshipIndex from './friendship_index';

const mapStateToProps = state => {
  return {
    friendships: Object.values(state.entities.friendships),
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFriendships: userId => dispatch(fetchFriendships(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex)
