@comments.each do |comment|
  json.set! comment.id do 
    json.id comment.id
    json.postId comment.post_id
    json.authorId comment.user_id
    json.authorFirstName comment.author.first_name
    json.authorLastName comment.author.last_name
    json.body comment.body
  end 
end