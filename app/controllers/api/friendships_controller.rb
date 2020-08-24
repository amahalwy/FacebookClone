class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.where(user_id: current_user.id)
  end

  def create
    @friendship = Friendship.new(req_params)
    @friendship2 = Friendship.new(friend_id: req_params.dig(:user_id), user_id: req_params.dig(:friend_id))

    if @friendship.save && @friendship2.save
      debugger
      render '/api/users/show', status: 201
      # Need to re-render the user's index page
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