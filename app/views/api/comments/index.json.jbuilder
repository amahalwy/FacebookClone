@comments.each do |comment|
  json.set! comment.id do 
    json.id comment.id
    json.postId comment.post_id
    json.authorId comment.user_id
    json.authorFirstName comment.author.first_name
    json.authorLastName comment.author.last_name
    json.body comment.body
    json.profilePhoto comment.author.profile_photo.attached? ? url_for(comment.author.profile_photo) : "https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_profile"
  end 
end