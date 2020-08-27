@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.authorId post.user_id
    json.authorFirstName post.author.first_name
    json.authorLastName post.author.last_name
    json.body post.body


    json.comments post.comments
    # json.comments do
    #   json.array! post.comments.each do |comment|
    #     json.set! comment.id do
    #       json.id comment.id
    #       json.body comment.body
    #     end
    #   end
    # end

  end
end