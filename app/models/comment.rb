class Comment < ApplicationRecord
  validates :body, length: {minimum: 1}

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  has_many :profile_photo,
    through: :author,
    source: :profile_photo_attachment
    
end
