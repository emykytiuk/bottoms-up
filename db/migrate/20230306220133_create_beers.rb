class CreateBeers < ActiveRecord::Migration[7.0]
  def change
    create_table :beers do |t|
      t.float :abv
      t.float :ibu
      t.text :name
      t.integer :brewery_id
      t.float :ounces

      t.timestamps
    end
  end
end
