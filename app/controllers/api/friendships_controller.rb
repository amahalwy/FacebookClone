class Api::FriendshipsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @friendships = Friendship.where(user_id: current_user.id)
  end

  def create
    @friendship = Friendship.new(req_params)
    @friendship2 = Friendship.new(friend_id: req_params.dig(:user_id), user_id: req_params.dig(:friend_id))
    @request = FriendRequest.find_by(requestor_id: req_params.dig(:friend_id), receiver_id: req_params.dig(:user_id))

    if @friendship.save && @friendship2.save
      render '/api/friendships/show', status: 201
    else
      # flash[:notice] = "Unable to add friend."
    end
  end

  private
  def req_params
    params.require(:friendship).permit(:friend_id, :user_id)
  end
end

# TODO => errors
