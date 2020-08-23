class Api::FriendRequestsController < ApplicationController

  def index
    @friend_requests = FriendRequest.where(receiver_id: current_user.id)
  end

  def create
    @friend_request = FriendRequest.new(req_params)
    debugger
    if @friend_request.save
      @requestor = User.find_by(id: params[:friend_request][:requestor_id])
      @receiver = User.find_by(id: params[:friend_request][:receiver_id])
      render 'api/friend_requests/show'
      # render 'api/users/show', status: 201
    else
      # Render error here on not being able to request again
    end
  end

  private
  def req_params
    params.require(:friend_request).permit(:requestor_id, :receiver_id)
  end
end
