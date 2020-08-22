class Api::FriendshipsController < ApplicationController

  # FRIENDSHIP STUFF
  def create
    # debugger
    @friendship = current_user.friendships.build(friend_id: params[:friend_id])
    if @friendship.save
      # flash[:notice] = "Added friend."
      debugger
      
    else
      # flash[:notice] = "Unable to add friend."
      debugger
      
    end
  end

  private
  def req_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
