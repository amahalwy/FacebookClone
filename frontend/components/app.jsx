import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Login from './session/login';
import UserShow from './user_show/user_show';
import UsersIndex from './user_show/users_index';
import PostsIndex from './posts/posts_index';

export default () => (
  <div>

    <Switch> 
      <AuthRoute exact path='/login' component={Login} />
      <ProtectedRoute exact path='/users' component={UsersIndex} />
      <ProtectedRoute exact path='/users/:userId' component={UserShow} />
      <ProtectedRoute exact path='/posts' component={PostsIndex} />
      {/* Need to redirect to /users if the id is invalid */}
      
      {/* Catch all */}

      <Redirect to="/users" />
    </Switch>
  </div>
)
