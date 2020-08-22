json.requests do
  @friend_requests.each do |request|
    json.set! request.id do
      json.requestor do
        json.id request.requestor.id
        json.firstName request.requestor.first_name
        json.lastName request.requestor.last_name
      end
    end
  end
end
