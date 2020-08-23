json.frienships do
  json.set! @friendship.id do
    json.friend do 
      json.friendId @friendship.friend_id
      json.firstName @friend.first_name
      json.lastName @friend.last_name
    end
  end
end