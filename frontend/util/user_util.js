// export const fetchUsers = users => (
//   $.ajax({
//     url: '/api/users',
//     data: { users }
//   })
// )

export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`
  })
)