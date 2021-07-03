@appointments.each do |appointment|
  json.set! appointment.id do
    json.partial! 'appointment', appointment: appointment
    json.creator do
      json.extract! appointment.creator, :id, :username
      json.appointments do
        appointment.creator.appointments.each do |appointment|
          json.set! appointment.id do
            json.extract! appointment, :id, :title
          end  
        end
      end
    end
  end     
end
  