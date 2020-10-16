class Post < ApplicationRecord
  validates :body, length: {minimum: 1}

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment,
    dependent: :destroy

  belongs_to :author,
    foreign_key: :owner_id,
    class_name: :User
    
end
