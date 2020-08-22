class FriendRequest < ApplicationRecord
  belongs_to :requestor, class_name: :User
  belongs_to :receiver, class_name: :User

  validates :requestor_id, uniqueness: { scope: :receiver_id,
    message: "Cannot request more than once" }
end
