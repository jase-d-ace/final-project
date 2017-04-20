class Monster < ApplicationRecord
  has_and_belongs_to_many :users
end
