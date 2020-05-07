class MoviesController < ApplicationController
  # skip_before_action(:check_login, only: :index)
    def index
        @movies = Movie.all
        render :json => @movies, include: [:genres, :production_companies, :comments]
    end


end
