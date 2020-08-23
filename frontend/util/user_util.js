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
export const fetchUserFriendRequests = userId => (
  $.ajax({
    url: `/api/users/${userId}/friend_requests`
  })
)

export const postFriendRequest = (requestor_id, receiver_id) => (
  $.ajax({
    url: '/api/friend_requests',
    method: 'POST',
    data: {friend_request: { requestor_id, receiver_id }}
  })
)

export const deleteFriendRequest = requestId => (
  $.ajax({
    url: `/api/friend_requests/${requestId}`,
    method: 'DELETE'
  })
)

export const postFriendShip = (user_id, friend_id) => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { friendship: { user_id, friend_id } }
  })
)