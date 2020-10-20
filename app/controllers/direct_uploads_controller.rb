class DirectUploadsController < ActiveStorage::DirectUploadsController  
  skip_before_action :verify_authenticity_token

  def create
    debugger
  end
end