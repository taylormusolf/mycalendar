json.extract! @user, :username
json.appointments do
  @user.appointments.each do |appointment|
    json.set! appointment.id do
      json.extract! appointment, :id, :title, :start_date, :end_date
      end
    end
  end
end