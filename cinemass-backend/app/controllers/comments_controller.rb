class CommentsController < ApplicationController
    def create
        movie= Movie.find_by(params[:id])
       comment= movie.comments.create(params[:comment].permit(:comment))
       redirect_to movie_path(movie)
    end

end
