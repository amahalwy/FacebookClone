class Api::FriendRequestsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :destroy]

  def index
    @friend_requests = FriendRequest.where(receiver_id: params[:user_id])
  end

  def create
    @friend_request = FriendRequest.new(req_params)
    if @friend_request.save
      @requestor = User.find_by(id: params[:friend_request][:requestor_id])
      @receiver = User.find_by(id: params[:friend_request][:receiver_id])
      render 'api/friend_requests/show'
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend_request = FriendRequest.find_by(id: params[:id])
    if @friend_request.destroy
      @friend_requests = FriendRequest.where(receiver_id: current_user.id)
      render 'api/friend_requests/index'
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  private
  def req_params
    params.require(:friend_request).permit(:requestor_id, :receiver_id)
  end
end

# TODO => errors, rendering correct page on delete