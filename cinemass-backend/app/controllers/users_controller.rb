class UsersController < ApplicationController

  # check user login details and render back user info if login passes
  def handle_login
    user = User.find_by(username: params[:username])
    if (user != nil && user.authenticate(params[:password]))
      session[:user_id] = user.id
      newUserHash = {username: user[:username], location: user[:location], bio: user[:bio], movie_id: user[:movie_id]}
      render :json => newUserHash
    else
      render :json => {error: true, message: 'Invalid Login'}
    end
  end

    def index
        @users = User.all
        render :json => @users, include: :movies
    end

    def create
        @user = User.create({
            username: params[:username],
            bio: params[:bio],
            location: params[:location],
            password: params[:password]
        })
        render :json => @user
    end

end
