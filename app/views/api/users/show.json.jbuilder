json.user do
  json.id @user.id
  json.firstName @user.first_name
  json.lastName @user.last_name
  json.email @user.email
end

json.requests_received do
  json.array! @user.friend_requests_as_receiver.each do |request|
    json.requestor_id request.requestor_id
  end
end