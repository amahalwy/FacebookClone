@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.firstName user.first_name
    json.lastName user.last_name
    json.email user.email
    json.profilePhoto user.profile_photo.attached? ? url_for(user.profile_photo) : ''
  end
end