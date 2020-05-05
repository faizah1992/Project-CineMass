class CreateMovieProductionCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :movie_production_companies do |t|
      t.integer :movie_id
      t.integer :production_company_id

      t.timestamps
    end
  end
end
