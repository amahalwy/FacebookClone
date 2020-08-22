export const fetchUsers = () => (
  $.ajax({
    url: '/api/users'
  })
)

export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`
  })
)

// FRIENDSHIP STUFF
export const postFriendRequest = (requestor_id, receiver_id) => (
  $.ajax({
    url: '/api/friend_requests',
    method: 'POST',
    data: {friend_request: { requestor_id, receiver_id }}
  })
)

export const fetchUserFriendships = userId => (
  $.ajax({
    url: `/api/users/${userId}/friend_requests`
  })
)