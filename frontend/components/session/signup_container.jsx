import {connect} from 'react-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);