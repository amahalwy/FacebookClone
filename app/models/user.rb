class User < ApplicationRecord
  # Backend User Auth
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_one_attached :profile_photo
  has_one_attached :cover_photo
  has_one_attached :avatar_photo

  has_many :friend_requests_as_requestor,
    foreign_key: :requestor_id,
    class_name: :FriendRequest,
    dependent: :destroy

  has_many :friend_requests_as_receiver,
    foreign_key: :receiver_id,
    class_name: :FriendRequest,
    dependent: :destroy

  has_many :friendships,
    foreign_key: :user_id,
    class_name: :Friendship,
    dependent: :destroy

  has_many :friends,
    through: :friendships,
    dependent: :destroy

  has_many :posts,
    foreign_key: :user_id,
    class_name: :Post,
    dependent: :destroy

  has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment,
    dependent: :destroy

   has_many :likes,
    foreign_key: :user_id,
    class_name: :Like,
    dependent: :destroy

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def check_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return nil unless @user
    @user.check_password?(password) ? @user : nil
  end

end
