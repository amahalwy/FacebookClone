import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute, Redirect} from '../util/route_util';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container';
import UserShowContainer from './user_show/user_show_container';

export default () => (
  <div>

    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route exact path='/users/:userId' component={UserShowContainer} />
      {/* <ProtectedRoute path="/users/" component={UserShowContainer} /> */}

      {/* <Redirect from="*" to="/" /> */}
    </Switch>
  </div>
)
