class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?
  # CRLLL

  def current_user
    @current_user || User.find_by_credentials(session_token: session[:session_token])
  end
  
  def require_logged_in!
    redirect_to new_session_url if !logged_in?
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil;
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

end
