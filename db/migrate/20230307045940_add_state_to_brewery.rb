class AddStateToBrewery < ActiveRecord::Migration[7.0]
  def change
    add_column :breweries, :state, :string
  end
end
