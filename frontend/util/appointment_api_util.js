export const fetchAppointments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/appointments/'
  })
);

export const fetchAppointment = appointmentId => (
  $.ajax({
    method: 'GET',
    url: `/api/appointments/${appointmentId}`
  })
);


export const createAppointment = appointment => (
  $.ajax({
    method: 'POST',
    url: '/api/appointments/',
    data: {appointment},
  })
);

export const updateAppointment = (appointment) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/appointments/${appointment.id}`,
    data: {appointment}
  })
);

export const deleteAppointment = appointmentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/appointments/${appointmentId}`
  })
);