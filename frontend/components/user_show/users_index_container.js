import {connect} from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import UsersIndex from './users_index';

const mapStateToProps = (state, ownProps) => ({ 
  history: ownProps.history,
  match: ownProps.match,
  params: ownProps.params,
  users: Object.values(state.entities.users),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);