@friend_requests.each do |request|
  json.set! request.id do
    json.requestId request.id
    json.requestorId request.requestor.id
    json.firstName request.requestor.first_name
    json.lastName request.requestor.last_name
  end
end