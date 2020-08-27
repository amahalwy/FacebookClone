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

export const createUserPhoto = (userId, formData) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)