class MoviesController < ApplicationController
    def index
        @movies = Movie.all
        render :json => @movies, include: :comments
    end
end
