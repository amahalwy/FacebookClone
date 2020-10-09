json.set! @friendship.id do
  json.id @friendship.id
  json.friendId @friendship.friend_id
  json.firstName @friendship.friend.first_name
  json.lastName @friendship.friend.last_name
  json.profilePhoto @friendship.friend.profile_photo.attached? ? url_for(@friendship.friend.profile_photo) : ''
end