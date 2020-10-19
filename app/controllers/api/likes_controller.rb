class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render '/api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    if @like.destroy
      @post = Post.find_by(id: @like.post_id)
      render '/api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private
  def like_params
    params.require(:like).permit(:post_id, :owner_id)
  end
end