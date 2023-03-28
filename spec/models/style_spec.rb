require "rails_helper"

RSpec.describe Style, :type => :model do
  it "is valid with valid attributes" do
    expect(Style.new(name: "New Style")).to be_valid
  end

  it "is not valid without a name" do
    style = Style.new(name: nil)
    expect(style).to_not be_valid
  end

  it "is is associated with a brewery" do
    should have_many(:beers)
  end

end
