module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :beers, [Types::BeerType], null: false
    def beers
      Beer.all
    end

    field :styles, [Types::StyleType], null: false
    def styles
      Style.all
    end

    field :breweries, [Types::BreweryType], null: false
    def breweries
      Brewery.all
    end
  end
end
