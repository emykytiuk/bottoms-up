class Style < ApplicationRecord
  has_many :beers

  validates_presence_of :name
end
