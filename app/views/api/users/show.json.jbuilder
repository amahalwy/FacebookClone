json.user do
  json.id @user.id
  json.firstName @user.first_name
  json.lastName @user.last_name
  json.email @user.email
  json.friendCount @user.friends.length
end


