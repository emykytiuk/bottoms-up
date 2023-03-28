require "rails_helper"

RSpec.describe Beer, :type => :model do
  let (:brewery) { Brewery.first }
  let (:style) { Style.first }

  it "is valid with valid attributes" do
    expect(Beer.new(name: "new beer", brewery: brewery, style: style)).to be_valid
  end

  it "is not valid without a name" do
    beer = Beer.new(name: nil)
    expect(beer).to_not be_valid
  end

  it "is not valid without a brewery" do
    beer = Beer.new(brewery: nil)
    expect(beer).to_not be_valid
  end

  it "is not valid without a style" do
    beer = Beer.new(style: nil)
    expect(beer).to_not be_valid
  end

  it "is is associated with a brewery" do
    should belong_to(:brewery)
  end

  it "is is associated with a style" do
    should belong_to(:style)
  end

end