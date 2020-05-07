class ApplicationController < ActionController::API

  # check user login details
   def check_login
     user = User.find(session[:user_id])
   end

end
