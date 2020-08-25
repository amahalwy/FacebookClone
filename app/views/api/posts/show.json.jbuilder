json.set! @post.id do
    json.id @post.id
    json.authorId @post.user_id
    json.authorFirstName @post.author.first_name
    json.authorLastName @post.author.last_name
    json.body @post.body
  end