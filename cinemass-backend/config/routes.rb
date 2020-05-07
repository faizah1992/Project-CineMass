Rails.application.routes.draw do
  # create login route for fetching and authenticating user login details
  post('/users/login', { to: 'users#handle_login'})
  get('/', {to: 'application#homepage'})

  resources :movie_genres
  resources :movie_production_companies
  resources :genres
  resources :production_companies
  resources :comments
  resources :users
  resources :movies


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
