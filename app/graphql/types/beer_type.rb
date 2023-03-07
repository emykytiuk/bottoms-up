# frozen_string_literal: true

module Types
  class BeerType < Types::BaseObject
    field :id, ID, null: false
    field :abv, Float
    field :ibu, Float
    field :name, String
    field :ounces, Float

    field :brewery_id, Integer
    field :brewery, Types::BreweryType

    field :style_id, Integer
    field :style, Types::StyleType

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
