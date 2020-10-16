json.id @user.id
json.firstName @user.first_name
json.lastName @user.last_name
json.email @user.email
json.friendCount @user.friends.length
json.coverPhoto @user.cover_photo.attached? ? url_for(@user.cover_photo) : "https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_background"
json.profilePhoto @user.profile_photo.attached? ? url_for(@user.profile_photo) : "https://facebook-clone-pro.s3.us-east-2.amazonaws.com/default_profile"

json.requestsAsRequestor @user.friend_requests_as_requestor
json.requestsAsReceiver @user.friend_requests_as_receiver
json.friendships @user.friendships
json.userPosts @user.posts