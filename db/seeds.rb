# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'csv'

def import_beers
  beers_text = File.read(Rails.root.join('csv', 'beers.csv'))

  csv = CSV.parse(beers_text, :headers => true)


  csv.each do |beer|
    style = Style.find_by(name: beer['style'])
    Beer.create(
      abv: beer['abv'],
      ibu: beer['ibu'],
      name: beer['name'],
      style_id: style.id,
      brewery_id: beer['brewery_id'],
      ounces: beer['ounces']
    )
  end
end

def import_style
  beers_text = File.open(Rails.root.join('csv', 'beers.csv'))
  csv = CSV.read(beers_text, headers: true)
  uni = csv['style'].uniq

  uni.each do |style|
    Style.create(name:style)
  end

end

def import_breweries
  breweries_text = File.read(Rails.root.join('csv', 'breweries.csv'))
  csv = CSV.parse(breweries_text, :headers => true)

  csv.each do |brewery|
    Brewery.create(
      id: brewery['id'],
      name:brewery['name'],
      city: brewery['city'],
      state: brewery['state']
    )
  end
end


import_breweries
import_style
import_beers
