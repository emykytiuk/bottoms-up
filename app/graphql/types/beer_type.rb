# frozen_string_literal: true

module Types
  class BeerType < Types::BaseObject
    field :id, ID, null: false
    field :abv, Float
    field :ibu, Float
    field :name, String, null: false

    field :brewery_id, Integer, null: false
    field :brewery, Types::BreweryType, null: false

    field :style_id, Integer, null: false
    field :style, Types::StyleType, null: false

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
