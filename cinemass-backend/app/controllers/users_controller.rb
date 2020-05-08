class UsersController < ApplicationController

  # check user login details and render back user info if login passes
  def handle_login
    user = User.find_by(username: params[:username])
    if (user != nil && user.authenticate(params[:password]))
      session[:user_id] = user.id
      newUserHash = {id:user[:id], username: user[:username], location: user[:location], bio: user[:bio], movie_id: user[:movie_id], image: user[:image]}
      # newUserHash = {user_id: user[:id], username: user[:username], location: user[:location], bio: user[:bio], movie_id: user[:movie_id], image: user[:image]}
      render :json => newUserHash
    else
      render :json => {error: true, message: 'Invalid Login'}
    end
  end

    def index
        @users = User.all
        render :json => @users, include: [:movies, :watchlists]
    end

    def show
      user = User.find_by(id:params[:id])

      render :json => user, include: :watchlists
    end

    def create
        @user = User.create({
            username: params[:username],
            bio: params[:bio],
            location: params[:location],
            password: params[:password],
            image: params[:image]
        })

        render :json => @user
    end

end
