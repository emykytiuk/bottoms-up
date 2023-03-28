require "rails_helper"

RSpec.describe Brewery, :type => :model do
  it "is valid with valid attributes" do
    expect(Brewery.new(name: "New Brewery", city: "Calgary", state: "AB")).to be_valid
  end

  it "is not valid without a name" do
    brewery = Brewery.new(name: nil)
    expect(brewery).to_not be_valid
  end

  it "is not valid without a city" do
    brewery = Brewery.new(city: nil)
    expect(brewery).to_not be_valid
  end

  it "is not valid without a state" do
    brewery = Brewery.new(state: nil)
    expect(brewery).to_not be_valid
  end

  it "is is associated with a brewery" do
    should have_many(:beers)
  end

end
