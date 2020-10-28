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

u1 = User.create(first_name: 'Demo', last_name: 'User', email: 'demo', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')
u2 = User.create(first_name: 'Demo', last_name: 'User2', email: 'demo2', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')
u3 = User.create(first_name: 'Demo', last_name: 'User3', email: 'ddemo3', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')
u4 = User.create(first_name: 'John', last_name: 'Appleseed', email: 'jappleseed', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')
u5 = User.create(first_name: 'Jake', last_name: 'Brighton', email: 'jbrighton', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')
u6 = User.create(first_name: 'Becky', last_name: 'Last', email: 'blast', password: 'demo1234') #, profile_photo: "app/assets/images/facebook_default.png", cover_photo: 'app/assets/images/default-background.jpg')

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

p1 = Post.create(user_id: u1.id, owner_id: u1.id, body: "This is your first post. Congratulations, you made it this far!!")
p2 = Post.create(user_id: u2.id, owner_id: u2.id, body: "This is your first post. Play around with the site.")
p3 = Post.create(user_id: u5.id, owner_id: u5.id, body: "Just another demo post. Try adding a picture next post!")
p4 = Post.create(user_id: u5.id, owner_id: u5.id, body: "Yet another demo post. Try editing this one with the 3 dots top right")
p5 = Post.create(user_id: u1.id, owner_id: u6.id, body: "A demo post for you to delete. Try it!!!")
p5 = Post.create(user_id: u1.id, owner_id: u6.id, body: "Another demo post for you to delete. Try it!!!")
p5 = Post.create(user_id: u1.id, owner_id: u6.id, body: "One more demo post for you to delete.")

# Comments
# Comment.new(user_id, body, post_id)

Comment.create(user_id: u6.id, body: "Some test comments. Try creating your own on this post too!", post_id: p3.id)
Comment.create(user_id: u5.id, body: "Here's another comment. Can you delete it? Create your own comment and delete that one!!", post_id: p3.id)
Comment.create(user_id: u1.id, body: "Yes this is another comment, however, try some other functionality. Click on the comment button and watch it focus the text!", post_id: p4.id)
Comment.create(user_id: u1.id, body: "Here's another comment; try 'liking' this post. If you already liked it, try unliking!", post_id: p5.id)