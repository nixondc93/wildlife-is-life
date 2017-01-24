class Animal < ApplicationRecord
  has_many :organizations
  self.per_page = 10

  searchable do
    text :taxonname
    text :scientific_name
  end

end
