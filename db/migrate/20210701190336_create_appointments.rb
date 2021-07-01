class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :title, null: false
      t.datetime :start_date, null:false
      t.datetime :end_date, null:false    
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :appointments, :title
    add_index :appointments, :creator_id
  end
end