class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :appointments,
  foreign_key: :creator_id

end