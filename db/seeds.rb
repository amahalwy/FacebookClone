# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Destroy all

User.destroy_all
Post.destroy_all
Comment.destroy_all
FriendRequest.destroy_all
Friendship.destroy_all

# Users
# User.new(first_name, last_name, email, password)

demo = User.create(first_name: 'Demo', last_name: 'User', email: 'demo', password: 'demo1234')
demo2 = User.create(first_name: 'Demo2', last_name: 'User2', email: 'duser2', password: 'demo1234')
demo3 = User.create(first_name: 'Demo3', last_name: 'User3', email: 'duser3', password: 'demo1234')
john = User.create(first_name: 'John', last_name: 'Appleseed', email: 'jappleseed', password: 'demo1234')
sponge = User.create(first_name: 'Sponge', last_name: 'Bob', email: 'sbob', password: 'demo1234')
darth = User.create(first_name: 'Darth', last_name: 'Vader', email: 'dvader', password: 'demo1234')

# Requests
# FriendRequest.new(requestor_id, receiver_id)

FriendRequest.create(requestor_id: 6, receiver_id: 1)
FriendRequest.create(requestor_id: 4, receiver_id: 1)
FriendRequest.create(requestor_id: 5, receiver_id: 1)
FriendRequest.create(requestor_id: 2, receiver_id: 1)
FriendRequest.create(requestor_id: 1, receiver_id: 2)
FriendRequest.create(requestor_id: 1, receiver_id: 3)
FriendRequest.create(requestor_id: 1, receiver_id: 4)
FriendRequest.create(requestor_id: 2, receiver_id: 5)
FriendRequest.create(requestor_id: 4, receiver_id: 6)

# Posts
# Post.new(user_id, body)

Post.create(user_id: 1, body: "This is your first post. Congratulations, you made it this far!!")
Post.create(user_id: 2, body: "This is your first post. What a time to be alive")
Post.create(user_id: 5, body: "I got my license out of a cereal box. Don't tell Mrs. Puff")
Post.create(user_id: 5, body: "One patty coming right up!")
Post.create(user_id: 6, body: "The force is weak on this site. Can I suffocate the creator?")

# Comments
# Comment.new(user_id, body, post_id)

Comment.create(user_id: 6, body: "Who is this Mrs. Puff? Can I suffocate her too????", post_id: 3)
Comment.create(user_id: 5, body: "Do you have to suffocate everything -.- ", post_id: 3)
Comment.create(user_id: 1, body: "Sponge, you need to work on your flick of the wrist.", post_id: 4)
Comment.create(user_id: 1, body: "I take great offence to that. Please refrain from suffocating things, thanks", post_id: 5)