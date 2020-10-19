class Like < ApplicationRecord
  validates :owner_id, presence: true
  validates :post_id, presence: true

  belongs_to :liker,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end
