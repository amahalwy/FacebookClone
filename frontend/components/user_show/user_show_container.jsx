import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions.js';
import {logout} from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)