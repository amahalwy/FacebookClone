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
    data: post,
    // contentType: 'multipart/form-data',
    contentType: false,
    processData: false,
  })
  // .then(response => response.json())
  // .then(data => uploadFile(post[post_photo], data))
)

export const updatePost = (postId, post) => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'PATCH',
    data: post,
    contentType: false,
    processData: false,
  })
)

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  })
)