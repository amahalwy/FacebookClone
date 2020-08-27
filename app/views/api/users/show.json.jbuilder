json.user do
  json.id @user.id
  json.firstName @user.first_name
  json.lastName @user.last_name
  json.email @user.email
  json.friendCount @user.friends.length
  # json.coverPhoto url_for(@user.cover_photo)
  
  json.requestsAsRequestor @user.friend_requests_as_requestor
  json.requestsAsReceiver @user.friend_requests_as_receiver
  json.friendships @user.friendships
end
