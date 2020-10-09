import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Login from './session/login';
import Feed from './feed/feed';
import UsersIndex from './user_show/users_index';
import UserShow from './user_show/user_show';
import PostsIndex from './posts/posts_index';

export default () => (
  <div>

    <Switch> 
      <AuthRoute exact path='/login' component={Login} />
      <ProtectedRoute exact path='/feed' component={Feed}/>
      <ProtectedRoute exact path='/users' component={UsersIndex} />
      <ProtectedRoute exact path='/users/:userId' component={UserShow} />
      <ProtectedRoute exact path='/posts' component={PostsIndex} />
      {/* Need to redirect to /users if the id is invalid */}
      
      {/* Catch all */}

      <Redirect to="/users" />
    </Switch>
  </div>
)
