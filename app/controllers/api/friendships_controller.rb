class Api::FriendshipsController < ApplicationController

  # FRIENDSHIP STUFF
  def create
    # debugger
    @friendship = current_user.friendships.build(friend_id: params[:friend_id])
    if @friendship.save
      flash[:notice] = "Added friend."
      
    else
      flash[:notice] = "Unable to add friend."
      
    end
  end

end
