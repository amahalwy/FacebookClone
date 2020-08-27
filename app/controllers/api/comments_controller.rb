class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id])
  end

  def create
    @comment = Comment.new(req_params)
    if @comment.save
      @comments = Comment.where(post_id: params[:comment][:post_id])
      render '/api/comments/index'
    else
      # Render errors
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    @comments = Comment.where(post_id: @comment[:post_id])
    render '/api/comments/index'
  end

  private
  def req_params
    params.require(:comment).permit(:user_id, :body, :post_id)
  end
end