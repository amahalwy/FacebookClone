json.frienships do
  json.set! @friendship.id do
    json.id @friendship.id
    json.friendId @friendship.friend_id
  end
end