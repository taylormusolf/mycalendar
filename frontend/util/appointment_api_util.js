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


export const createAppointment = FormData => (
  $.ajax({
    method: 'POST',
    url: '/api/appointments/',
    data: FormData,
    contentType: false,
    processData: false
  })
);

export const updateAppointment = (FormData, appointmentId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/appointments/${appointmentId}`,
    data: FormData,
    contentType: false,
    processData: false
  })
);

export const deleteAppointment = appointmentId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/appointments/${appointmentId}`
  })
);