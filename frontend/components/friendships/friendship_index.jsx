import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import FriendshipItem from './friendship_index_item';
import { clearFriendships, fetchFriendships } from "../../actions/friendship_actions";

export default props =>{
  const currentUser = useSelector((state) => state.session.user);
  const friendships = useSelector(state => Object.values(state.entities.friendships));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriendships(currentUser.id));
    return () => {
      dispatch(clearFriendships());
    }
  }, [])

  if (!friendships) return ""; 

  return (
    <div>
      <ul className='friends-list'>
      {
        friendships.map(friendship =>{
          return (
            <FriendshipItem 
              key={friendship.id}
              friendship={friendship}
              history={props.history}
            />
          )
        })
      }
      </ul>
    </div>
  )
}