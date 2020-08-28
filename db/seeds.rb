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

u1 = User.create(first_name: 'Demo', last_name: 'User', email: 'demo', password: 'demo1234')
u2 = User.create(first_name: 'Demo2', last_name: 'User2', email: 'duser2', password: 'demo1234')
u3 = User.create(first_name: 'Demo3', last_name: 'User3', email: 'duser3', password: 'demo1234')
u4 = User.create(first_name: 'John', last_name: 'Appleseed', email: 'jappleseed', password: 'demo1234')
u5 = User.create(first_name: 'Sponge', last_name: 'Bob', email: 'sbob', password: 'demo1234')
u6 = User.create(first_name: 'Darth', last_name: 'Vader', email: 'dvader', password: 'demo1234')

# Requests
# FriendRequest.new(requestor_id, receiver_id)

FriendRequest.create(requestor_id: u5.id, receiver_id: u1.id)
FriendRequest.create(requestor_id: u4.id, receiver_id: u1.id)
FriendRequest.create(requestor_id: u6.id, receiver_id: u1.id)
FriendRequest.create(requestor_id: u2.id, receiver_id: u1.id)
FriendRequest.create(requestor_id: u1.id, receiver_id: u3.id)
FriendRequest.create(requestor_id: u2.id, receiver_id: u5.id)
FriendRequest.create(requestor_id: u4.id, receiver_id: u6.id)

# Posts
# Post.new(user_id, body)

p1 = Post.create(user_id: u1.id, body: "This is your first post. Congratulations, you made it this far!!")
p2 =Post.create(user_id: u2.id, body: "This is your first post. What a time to be alive")
p3 = Post.create(user_id: u5.id, body: "I got my license out of a cereal box. Don't tell Mrs. Puff")
p4 = Post.create(user_id: u5.id, body: "One patty coming right up!")
p5 = Post.create(user_id: u6.id, body: "The force is weak on this site. Can I suffocate the creator?")

# Comments
# Comment.new(user_id, body, post_id)

Comment.create(user_id: u6.id, body: "Who is this Mrs. Puff? Can I suffocate her too????", post_id: p3.id)
Comment.create(user_id: u5.id, body: "Do you have to suffocate everything -.- ", post_id: p3.id)
Comment.create(user_id: u1.id, body: "Sponge, you need to work on your flick of the wrist.", post_id: p4.id)
Comment.create(user_id: u1.id, body: "I take great offence to that. Please refrain from suffocating things, thanks", post_id: p5.id)