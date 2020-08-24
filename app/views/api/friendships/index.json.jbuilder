@friendships.each do |friendship|
  json.set! friendship.id do
    json.friendshipId friendship.id
    json.friendId friendship.friend.id
    json.firstName friendship.friend.first_name
    json.lastName friendship.friend.last_name
  end
end