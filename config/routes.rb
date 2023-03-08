Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  if Rails.env.development?
    mount GraphqlPlayground::Rails::Engine, at: "/graphql_playground", graphql_path: "graphql"
  end

  namespace :api do
    namespace :v1 do
      resources :breweries
      resources :beers
      resources :styles
    end
  end
end
