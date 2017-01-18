class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :scientific_name
      t.string :threat_level
      t.text :regions
      t.integer :population
      t.string :description

      t.timestamps
    end
  end
end
