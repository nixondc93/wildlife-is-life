class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :bio
      t.string :password_digest
      t.integer :age

      t.timestamps
    end
  end
end
