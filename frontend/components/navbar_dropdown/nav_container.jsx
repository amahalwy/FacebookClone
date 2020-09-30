import { connect } from 'react-redux';
import NavbarDropdown from './navbar_dropdown';
import {logout} from '../../actions/session';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDropdown);