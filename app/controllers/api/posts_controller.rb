class Api::PostsController < ApplicationController
    before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @posts = Post.where(user_id: params[:user_id])
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def create
    @post = Post.new(req_params)
    if @post.save
      render '/api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(req_params)
      @posts = Post.where(user_id: params[:post][:authorId])
      render '/api/posts/index'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.destroy
      @posts = Post.where(user_id: @post.user_id)
      render '/api/posts/index'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def req_params
    params.require(:post).permit(:user_id, :owner_id, :body, :post_photo)
  end

end

# Todo => render errors