
export const postFriendShip = (user_id, friend_id) => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { friendship: { user_id, friend_id } }
  })
)