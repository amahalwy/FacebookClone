import { connect } from 'react-redux';
import NavbarDropdown from './navbar_dropdown';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDropdown);