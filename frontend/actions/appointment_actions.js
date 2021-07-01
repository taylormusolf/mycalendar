import * as APIUtil from '../util/appointment_api_util';

export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';
export const RECEIVE_APPOINTMENT = 'RECEIVE_APPOINTMENT';
export const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';
export const RECEIVE_APPOINTMENT_ERRORS = 'RECEIVE_APPOINTMENT_ERRORS';
export const RESET_APPOINTMENT_ERRORS = 'RESET_APPOINTMENT_ERRORS';

export const receiveAppointments = (appointments) => ({
  type: RECEIVE_APPOINTMENTS,
  appointments,
});

export const receiveAppointment = (appointment) => ({
  type: RECEIVE_APPOINTMENT,
  appointment
});

export const removeAppointment = (appointmentId) => ({
  type: REMOVE_APPOINTMENT,
  appointmentId
});

export const receiveAppointmentErrors = (errors) => ({
  type: RECEIVE_APPOINTMENT_ERRORS,
  errors
});

export const resetAppointmentErrors = () => ({
  type: RESET_APPOINTMENT_ERRORS
});

export const fetchAppointments = () => dispatch => (
  APIUtil.fetchAppointments()
    .then(appointments => (dispatch(receiveAppointments(appointments))))
);

export const fetchAppointment = appointmentId => dispatch => (
  APIUtil.fetchAppointment(appointmentId)
    .then(appointment => (dispatch(receiveAppointment(appointment))))
);

export const createAppointment = appointment => dispatch => (
  APIUtil.createAppointment(appointment)
  .then(appointment => (dispatch(receiveAppointment(appointment))),
  errors => (dispatch(receiveAppointmentErrors(errors.responseJSON))
  ))
);

export const updateAppointment = (appointment, id) => dispatch => {
    return APIUtil.updateAppointment(appointment, id)
      .then(appointment => (dispatch(receiveAppointment(appointment))),
      errors => (dispatch(receiveAppointmentErrors(errors.responseJSON))
      ))
}
  
;

export const deleteAppointment = appointmentId => dispatch => (
  APIUtil.deleteAppointment(appointmentId).then(() => (
    dispatch(removeAppointment(appointmentId))
  ))
);