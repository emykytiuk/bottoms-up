# frozen_string_literal: true

module Types
  class ErrorType < Types::BaseObject
    field :messages, [String], null: false
  end
end
