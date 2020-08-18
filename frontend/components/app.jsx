import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import Modal from './modal/modal'

export default () => (
  <div>
    {/* splashpage */}
    {/* protected /feed, /users/show */}
    {/* AuthRoute */}
    <Route exact path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
    {/* <Route path="/users/:userId" component={UserShowContainer} /> */}
  </div>
)
