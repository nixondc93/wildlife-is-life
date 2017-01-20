class AddOrganizationToAnimal < ActiveRecord::Migration[5.0]
  def change
    add_reference :organizations, :animal, foreign_key: true
  end
end
