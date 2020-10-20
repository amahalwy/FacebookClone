// import { DirectUpload } from 'activestorage';

// const uploadFile = (file, user) => {
//   const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads');
//   upload.create((error, blob) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('There was no error')
//     }
//   })
// }

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
    data: {post},
  })
  // .then(response => response.json())
  // .then(data => uploadFile(post[post_photo], data))
)

export const updatePost = post => (
  $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: {post}
  })
)

export const deletePost = postId => (
  $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  })
)