class Api::FriendRequestsController < ApplicationController

  def create
    @friend_request = FriendRequest.new(req_params)
    if @friend_request.save
      @user = User.find_by(id: params[:friend_request][:receiver_id])
      render 'api/users/show', status: 202
    end
  end

  private
  def req_params
    params.require(:friend_request).permit(:requestor_id, :receiver_id)
  end
end
