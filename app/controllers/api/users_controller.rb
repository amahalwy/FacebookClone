class Api::UsersController < ApplicationController
  before_action :require_logged_in!, only: [:update]

  def index
    @users = User.all
    render :index, status: 201
  end

  def show
    debugger
    @user = User.find_by(id: params)
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render :show, status: 201
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: ["Can't complete that update. Try again."], status: 404
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :cover_photo, :profile_photo)
  end
  
end
