class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable #:confirmable, 
  include DeviseTokenAuth::Concerns::User
  #for the sake of simplicity,
  # pokemon will be listed as "monsters" and "monster"
  #so that we don't confuse rails
  has_and_belongs_to_many :monsters
end
