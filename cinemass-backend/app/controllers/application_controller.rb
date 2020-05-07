class ApplicationController < ActionController::API

  # run check login before anything else
  before_action(:check_login)

  # check user login details
   def check_login
     user = User.find(session[:user_id])
   end
end
