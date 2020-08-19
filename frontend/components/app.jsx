import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container';
import UserShowContainer from './user_show/user_show_container';

export default () => (
  <div>

    <Switch> 

    {/* Auth route for login */}

    {/* Everything else protected */}


      <Route exact path='/' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route exact path='/users/:userId' component={UserShowContainer} />
      {/* <ProtectedRoute path="/users/" component={UserShowContainer} /> */}

      {/* Catch all redirect */}
      {/* Either redirect to feed/profile page if logged in */}
      <Redirect to="/" />
    </Switch>
  </div>
)
