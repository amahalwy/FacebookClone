class Post < ApplicationRecord
  validates :body, length: {minimum: 1}

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  # has_many :comments, class_name: :Comment
end
