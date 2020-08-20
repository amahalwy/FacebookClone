import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[ownProps.match.params.userId]
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);