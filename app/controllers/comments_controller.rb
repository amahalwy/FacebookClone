class CommentsController < ApplicationController

  def index
    
  end

  def create
    
  end

  private
  def req_params
    params.require(:comment).permit(:user_id, :body)
  end

end