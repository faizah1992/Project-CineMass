class Movie < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :movie_production_companies
    has_many :production_companies, through: :movie_production_companies
    has_many :movie_genres
    has_many :genres, through: :movie_genres
end
