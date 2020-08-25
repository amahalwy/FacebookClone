class Api::PostsController < ApplicationController
  def index
    @posts = Post.where(user_id: params[:user_id])
    # debugger
  end

  def show
    @post = Post.find_by(id: params[:id])
    # debugger
    if @post 
      render '/api/posts/show'
    else
      # Render errors
    end
  end

  def create
    @post = Post.new(req_params)
    if @post 
      debugger
      render '/api/posts/show'
    else
      # Render errors
    end
  end

  # def method_name
    
  # end

  private
  def req_params
    params.require(:post).permit(:user_id, :body)
  end

end

# Todo => render errors