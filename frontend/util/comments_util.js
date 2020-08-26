export const fetchPostComments = postId => (
  $.ajax({
    url: `/api/${postId}/comments`
  })
)

export const createComment = comment => (
  $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {comment}
  })
)

export const deleteComment = commentId => (
  $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  })
)