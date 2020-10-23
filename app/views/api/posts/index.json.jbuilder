@posts.each do |post|
  json.set! post.id do
    json.id post.id
    json.authorId post.user_id
    json.authorFirstName post.author.first_name
    json.authorLastName post.author.last_name
    json.body post.body
    json.authorProfilePhoto post.author.profile_photo.attached? ? url_for(post.author.profile_photo) : "https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_profile"
    json.postPhoto post.post_photo

    json.comments post.comments do |comment|
      json.id comment.id
      json.authorId comment.user_id
      json.body comment.body
      json.authorFirstName comment.author.first_name
      json.authorLastName comment.author.last_name
      json.profilePhoto comment.author.profile_photo.attached? ? url_for(comment.author.profile_photo) : "https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_profile"
    end

    json.likes post.likes do |like|
      json.id like.id
      json.ownerId like.owner_id
    end
    json.likeCount post.likes.length

  end
end