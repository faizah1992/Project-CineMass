class MoviesController < ApplicationController
    def index
        @movies = Movie.all
        render :json => @movies, include: [:genres, :production_companies, :comments]
    end


end
