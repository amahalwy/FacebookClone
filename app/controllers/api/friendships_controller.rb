class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.where(user_id: current_user.id)
  end

  def create
    @friendship = Friendship.new(req_params)
    if @friendship.save
      # use this => @user = User.find_by(user_id: current_user.id)
      @user = User.find_by(id: params[:friendship][:user_id])
      @friend = User.find_by(id: params[:friendship][:friend_id])
      render 'api/friendships/show'
    else
      # flash[:notice] = "Unable to add friend."
      
    end
  end

  private
  def req_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
