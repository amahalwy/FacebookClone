class Api::FriendshipsController < ApplicationController

  def create
    # @friendship = current_user.friendships.build(friend_id: params[:friend_id])
    @friendship = Friendship.new(req_params)
    debugger
    if @friendship.save
      @requestor = User.find_by(id: params[:friendship][:user_id])
      @receiver = User.find_by(id: params[:friendship][:friend_id])
      render 'api/friendships/show'
      
    else
      # flash[:notice] = "Unable to add friend."
      # debugger
      
    end
  end

  private
  def req_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
