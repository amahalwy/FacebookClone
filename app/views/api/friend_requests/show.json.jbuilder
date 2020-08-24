json.set! @friend_request.id do
  json.id @friend_request.id
  json.requestorId @friend_request.requestor_id
  json.receiverId @friend_request.receiver_id
end