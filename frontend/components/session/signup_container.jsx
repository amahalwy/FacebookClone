import {connect} from 'react-redux';
import { signup, clearErrors } from "../../actions/session";
import Signup from './signup';

const mapStateToProps = state => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);