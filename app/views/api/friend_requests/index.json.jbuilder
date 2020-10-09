@friend_requests.each do |request|
  json.set! request.id do
    json.id request.id
    json.requestorId request.requestor.id
    json.firstName request.requestor.first_name
    json.lastName request.requestor.last_name
    json.profilePhoto request.requestor.profile_photo.attached? ? url_for(request.requestor.profile_photo) : ''
  end
end