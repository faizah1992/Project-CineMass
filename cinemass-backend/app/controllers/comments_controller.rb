class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render :json => comments, include: [:movie, :user]
    end

    def create
        comment = Comment.create({
          movie_id: params["movie_id"],
          likes: params["likes"],
          comment:params["comment"],
          user_id: params["user_id"]

        })
        render(json:comment)

    end

    def destroy
        comment=Comment.find(params[:id])
        comment.destroy
        render(json:comment)
     end
end
