json.set! @like.id do
  json.id @like.id
  json.ownerId @like.owner_id
  json.postId @like.post_id
end