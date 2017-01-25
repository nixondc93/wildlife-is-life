class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.string :taxonname
      t.integer :taxonid
      t.string :scientific_name
      t.json :assesments
      t.text :taxonomicnotes
      t.text :rationale
      t.text :geographicrange
      t.text :population
      t.text :populationtrend
      t.text :habitat
      t.text :threats
      t.text :conservationmeasures
      t.timestamps
    end
  end
end
