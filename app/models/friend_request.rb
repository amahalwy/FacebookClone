class FriendRequest < ApplicationRecord
  validates :requestor_id, uniqueness: { scope: :receiver_id,
    message: "cannot request more than once" }

  belongs_to :requestor, class_name: :User
  belongs_to :receiver, class_name: :User

end
