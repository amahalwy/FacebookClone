import {connect} from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
// import { clearFriendships} from '../../actions/friendship_actions';
import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => { 
  return{
  history: ownProps.history,
  match: ownProps.match,
  location: ownProps.location,
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]}
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),
  // clearFriendships: () => dispatch(clearFriendships())
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);