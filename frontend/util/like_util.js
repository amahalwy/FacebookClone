export const postLike = (owner_id, post_id) => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { like: {owner_id, post_id} }
  })
)

export const deleteLike = likeId => (
  $.ajax({
    url: `/api/likes/${likeId}`,
    method: 'DELETE'
  })
)