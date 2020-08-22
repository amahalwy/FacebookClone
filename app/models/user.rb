class User < ApplicationRecord
  # Backend User Auth
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :password_digest, presence: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :friend_requests_as_requestor,
    foreign_key: :requestor_id,
    class_name: :FriendRequest

  has_many :friend_requests_as_receiver,
    foreign_key: :receiver_id,
    class_name: :FriendRequest

  has_many :friendships,
    foreign_key: :user_id,
    class_namy: :Friendship

  has_many :friends,
    through: :friendships

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
