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

export const updateUserPhoto = (userId, formData) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'PATCH',
    data: formData,
    contentType: false,
    processData: false
  })
)