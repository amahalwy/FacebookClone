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

export const postFriendRequest = (requestor_id, receiver_id) => (
  $.ajax({
    url: '/api/friend_requests',
    method: 'POST',
    data: {friend_request: { requestor_id, receiver_id }}
  })
)