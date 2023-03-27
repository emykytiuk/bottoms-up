class RemoveOuncesFromBeer < ActiveRecord::Migration[7.0]
  def change
    remove_column :beers, :ounces, :float
  end
end
