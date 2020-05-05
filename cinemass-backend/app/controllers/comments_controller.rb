class CommentsController < ApplicationController
    def create
        user= User.first
        movie= Movie.find_by(params[:id])
    #    comment= movie.comments.create({
    #        user_id: user.id,
    #        movie_id: 
    #    })
       redirect_to movie_path(movie)
    end

end
