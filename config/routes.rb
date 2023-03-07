Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  namespace :api do
    namespace :v1 do
      resources :breweries
      resources :beers
      resources :styles
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
