import {connect} from 'react-redux';
import UsersShow from './user_show';
import { fetchUsers } from '../../actions/user_actions.js';
import UsersIndex from './users_index';

const mapStateToProps = state => {
  // debugger;
  return {

    users: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: users => dispatch(fetchUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);