class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :rating
      t.string :genre
      t.text :details
      t.integer :runtime
      t.integer :released_date
      t.text :production_company
      t.integer :likes
      t.timestamps
    end
  end
end
