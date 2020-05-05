class UsersController < ApplicationController
    def index
        @users = User.all
        render :json => @users
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
