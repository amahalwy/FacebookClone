
export const fetchUserPosts = userId => (
  $.ajax({
    url: `/api/users/${userId}/posts`
  })
)

export const fetchPost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`
  })
)

export const createPost = post => (
  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: { post }
  })
)

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  })
)