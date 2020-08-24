class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post 
      render '/api/posts/show'
    else

    end
  end

  def create
    
  end

  # def method_name
    
  # end


end
