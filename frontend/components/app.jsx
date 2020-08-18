import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

export default () => (
  <div>
    {/* splashpage */}
    {/* protected /feed, /users/show */}
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
  </div>
)
