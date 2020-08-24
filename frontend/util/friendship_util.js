
// export const postFriendship = (friend_id, user_id) => (
//   $.ajax({
//     url: '/api/friendships',
//     method: 'POST',
//     data: { friendship: { friend_id, user_id } }
//   })
// )

export const postFriendship = (user_id, friend_id) => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { friendship: {user_id, friend_id} }
  })
)
 
export const fetchFriendships = userId => (
  $.ajax({
    url: `/api/users/${userId}/friendships`
  })
)