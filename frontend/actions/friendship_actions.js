import * as APIUtil from '../util/friendship_util';

export const POST_FRIENDSHIP = "POST_FRIENDSHIP";

const createFriendship = payload => ({
  type: POST_FRIENDSHIP,
  payload
})

// Thunk action creators
export const postFriendship = (user_id, friend_id) => dispatch => (
  APIUtil.postFriendShip(user_id, friend_id)
    .then(payload => dispatch(createFriendship(payload)))
)