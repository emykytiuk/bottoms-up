class Brewery < ApplicationRecord
  has_many :beers

  validates_presence_of :name, :city, :state
end
