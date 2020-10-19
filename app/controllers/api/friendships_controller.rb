class Api::FriendshipsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :index]

  def index
    @friendships = Friendship.where(user_id: params[:user_id])
  end

  def create
    @friendship = Friendship.new(req_params)
    @friendship2 = Friendship.new(friend_id: req_params.dig(:user_id), user_id: req_params.dig(:friend_id))
    @request = FriendRequest.find_by(requestor_id: req_params.dig(:friend_id), receiver_id: req_params.dig(:user_id))

    if @friendship.save && @friendship2.save
      render '/api/friendships/show', status: 201
    else
      render json: ["Couldn't create that friendship."], status: 422
    end
  end

  def destroy
    @receiver_side = Friendship.find_by(user_id: Friendship.find_by(id: params[:id]).user_id)
    @friend_side = Friendship.find_by(friend_id: Friendship.find_by(id: params[:id]).user_id)
  
    if @receiver_side.destroy && @friend_side.destroy
      @friendships = Friendship.where(user_id: current_user.id)
      render 'api/friendships/index'
    else
      render json: ["Couldn't delete that friendship, something went wrong."], status: 422
    end
  end


  private
  def req_params
    params.require(:friendship).permit(:friend_id, :user_id)
  end
end

# TODO => errors
