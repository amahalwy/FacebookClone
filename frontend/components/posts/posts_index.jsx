import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import PostIndexItem from './post_index_item';
import {fetchUserPosts, clearPosts} from '../../actions/post_actions';

export default props => {
  const posts = useSelector(state => Object.values(state.entities.posts));
  const dispatch = useDispatch();

  useEffect(() => {
    // debugger
    dispatch(fetchUserPosts(props.user.id));
    return () => {
      dispatch(clearPosts());
    }
  }, [])
  

  return (
    <div>
      <ul>
      {
        posts.map(post => {
          return (
            <PostIndexItem
              key={post.id}
              history={props.history}
              post={post}
            />
          )
        })
      }
      </ul>
    </div>
  )
}