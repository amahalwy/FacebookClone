class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(user_id: params[:user_id])
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post 
      render '/api/posts/show'
    else
      # Render errors
    end
  end

  def create
    @post = Post.new(req_params)
    if @post.save
      @posts = Post.where(user_id: params[:post][:user_id])
      render '/api/posts/index'
    else
      # Render errors
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update(req_params)
      @posts = Post.where(user_id: params[:post][:authorId])
      render '/api/posts/index'
    else
      # Render errors
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    @posts = Post.where(user_id: @post.user_id)
    render '/api/posts/index'
  end

  private
  def req_params
    params.require(:post).permit(:user_id, :body)
  end

end

# Todo => render errors