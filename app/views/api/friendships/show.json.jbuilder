json.set! @friendship.id do
  json.friendId @friendship.friend_id
  json.firstName @friendship.friend.first_name
  json.lastName @friendship.friend.last_name
end