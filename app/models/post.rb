class Post < ApplicationRecord
  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  # has_many :comments, class_name: :Comment
end
