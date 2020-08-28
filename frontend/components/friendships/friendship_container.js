import {connect} from 'react-redux';
import { fetchFriendships, clearFriendships } from '../../actions/friendship_actions';
import FriendshipIndex from './friendship_index';

const mapStateToProps = (state, ownProps) => {
  return{
  history: ownProps.history,
  match: ownProps.match,
  location: ownProps.location,
  friendships: Object.values(state.entities.friendships),
  currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFriendships: userId => dispatch(fetchFriendships(userId)),
  clearFriendships: () => dispatch(clearFriendships())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendshipIndex)
