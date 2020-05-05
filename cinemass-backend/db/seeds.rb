require 'rest-client'
require 'json'
require 'pry'
require 'faker'

Movie.destroy_all
User.destroy_all
Comment.destroy_all
Genre.destroy_all
MovieGenre.destroy_all
ProductionCompany.destroy_all
MovieProductionCompany.destroy_all

api_key = '639d285cc886f1f74c1c75f0e2d18bc0'

(100..115).each do |num|
  url = "http://api.themoviedb.org/3/movie/#{num}?api_key=#{api_key}&append_to_response=videos"
  begin
    response = RestClient.get(url)
    movie = JSON.parse(response)
    new_movie = Movie.create({title: movie['title'], rating: movie['vote_average'], details: movie['overview'], runtime: movie['runtime'], released_date: movie['release_date'], likes: movie['vote_count']})


    movie['genres'].each do |genre|
      if Genre.find_by({name: genre['name']})
        MovieGenre.create({movie_id: new_movie.id, genre_id: Genre.find_by({name: genre['name']}).id})
      else
        genre = Genre.create({name: genre['name']})
        MovieGenre.create({movie_id: new_movie.id, genre_id: genre.id})
      end
    end


    movie['production_companies'].each do |company|
      if ProductionCompany.find_by({name: company['name']})
         MovieProductionCompany.create({movie_id: new_movie.id, production_company_id: ProductionCompany.find_by({name: company['name']}).id})
      else
        production_company = ProductionCompany.create({name: company['name']})
        MovieProductionCompany.create({movie_id: new_movie.id, production_company_id: production_company.id})
      end
    end

  rescue Exception => err
    p err
  end
end


(1..20).each do |num|
  User.create({username: Faker::Name.name, location: Faker::Address.city, bio: Faker::Lorem.paragraph, movie_id: Movie.all.sample.id})
end

(1..20).each do |num|
  Comment.create({comment: Faker::Lorem.sentence, likes: 0, user_id: User.all.sample.id, movie_id: Movie.all.sample.id})
end
