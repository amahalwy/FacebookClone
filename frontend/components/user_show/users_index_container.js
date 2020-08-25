import {connect} from 'react-redux';
import { fetchUsers, postFriendRequest } from '../../actions/user_actions';
import { logout } from '../../actions/session';
import UsersIndex from './users_index';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);