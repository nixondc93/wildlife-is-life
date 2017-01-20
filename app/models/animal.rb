class Animal < ApplicationRecord
  has_many :organizations
  self.per_page = 10
end
