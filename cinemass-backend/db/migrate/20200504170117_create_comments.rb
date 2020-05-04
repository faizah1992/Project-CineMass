class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :movie_id
      t.text :comment
      t.integer :user_id
      t.integer :likes
      t.timestamps
    end
  end
end
