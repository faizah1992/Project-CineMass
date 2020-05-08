class WatchlistsController < ApplicationController
    def create
        watchlist= Watchlist.create({
            movie_id: params["movie_id"],
            user_id: params["user_id"]
        })
        render(json:watchlist)
    end

    def index
        watchlists=  Watchlist.all
        render(json:watchlists, include: :movie)
    end
end
