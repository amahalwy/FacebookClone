import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postFriendRequest, deleteFriendRequest} from '../../actions/friend_request_actions';
import { deleteFriendship } from '../../actions/friendship_actions';

export default props => {
  const currentUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();

  const handleRequest = () => {
    dispatch(postFriendRequest(currentUser.id, props.user.id));
  }

  // const cancelRequest = () => {
    // dispatch(deleteFriendRequest())
  // }

  useEffect(() => {
    return;
  }, [])

  // if (Object.values(props.friendships).length <= 0) {
  //   return (
  //     <button className='edit-profile-button' onClick={handleRequest} >
  //       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
  //       Add Friend
  //     </button >
  //   )
  // }
  if (props.user.id === currentUser.id) {
    return (
      <button className='edit-profile-button'>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
        Edit Profile
      </button>
    )
  } else if ((props.user.friendships) && (props.user.friendships.some(user => user.friend_id === currentUser.id)) ) {
    const friendship = props.friendships.filter(ship => {
      if (ship.friendId === currentUser.id) {
        return ship;
      }
    })
    return (
      <button className='edit-profile-button' onClick={() => {dispatch(deleteFriendship(friendship[0].id))} }>
        {/* <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-messenger" className="message-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg> */}
        Remove Friend
      </button >
    )
  } else if ((props.user.requestsAsReceiver) && (props.user.requestsAsReceiver.some(user => user.requestor_id === currentUser.id )) ) { // if (this.props.currentUser.requestsSent)
    const request = props.user.requestsAsReceiver.filter(req => {
      if (req.requestor_id === currentUser.id) {
        return req;
      }
    })
    return (
      <button className='edit-profile-button'>
        Requested
      </button>
    )  
  } else {
    return (
      <button className='edit-profile-button' onClick={handleRequest} >
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
        Add Friend
      </button >
    )
  }
}
