class Appointment < ApplicationRecord
  validates :title, :start_date, :end_date, :creator_id, presence: true

  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User
  

end