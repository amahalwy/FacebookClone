class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id])
    debugger
  end

  def create
    @comment = Comment.new(req_params)
    if @comment.save
      debugger
      @comments = Comment.where(post_id: params[:comment][:post_id])
      render '/api/comments/index'
    else
      debugger
      # Render errors
    end
  end

  private
  def req_params
    params.require(:comment).permit(:user_id, :body, :post_id)
  end
end