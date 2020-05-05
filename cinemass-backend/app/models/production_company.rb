class ProductionCompany < ApplicationRecord
  has_many :movie_production_companies
  has_many :movies, through: :movie_production_companies
end
