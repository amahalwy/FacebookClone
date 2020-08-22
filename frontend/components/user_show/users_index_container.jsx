import {connect} from 'react-redux';
import UsersShow from './user_show';
import { fetchUsers, postFriendRequest } from '../../actions/user_actions';
import { logout } from '../../actions/session';
import UsersIndex from './users_index';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users)),

  // FRIENDSHIP STUFF
  // postFriendRequest: payload => dispatch(postFriendRequest(payload))

})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);