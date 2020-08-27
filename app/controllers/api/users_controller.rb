class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index, status: 201
  end

  def create
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      render :show, status: 201
    else
      # Render errors
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(req_params)
      render :show
    else
      # Render errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :cover_photo)
  end
  
end
