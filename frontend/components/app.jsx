import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container';
import UserShowContainer from './user_show/user_show_container';
import UsersIndexContainer from './user_show/users_index_container';
import NavBarContainer from './navbar/navbar_container';
import PostsIndexContainer from './posts/posts_index_container';
import PostFormContainer from './posts_form/post_form_container';

export default () => (
  <div>

    <Switch> 
      <AuthRoute exact path='/login' component={LoginContainer} />
      {/* <Route path='/signup' component={SignupContainer} /> */}
      <ProtectedRoute exact path='/users' component={UsersIndexContainer} />
      <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
      <ProtectedRoute exact path='/posts' component={PostsIndexContainer} />
      <Route exact path='/postform' component={PostFormContainer}/>


      {/* Need to redirect to /users if the id is invalid */}
      
      {/* Catch all */}
      <Redirect to="/users" />
    </Switch>
  </div>
)
