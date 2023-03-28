class Beer < ApplicationRecord
  belongs_to :style
  belongs_to :brewery

  validates_presence_of :name, :brewery, :style
end
