import { RECEIVE_APPOINTMENTS, RECEIVE_APPOINTMENT, REMOVE_APPOINTMENT } from "../actions/appointment_actions";

const appointmentsReducer = (state=[], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_APPOINTMENTS:
      return action.appointments;
    case RECEIVE_APPOINTMENT:
      newState[action.appointment.id] = action.appointment;
      return newState;
    case REMOVE_APPOINTMENT:
      delete newState[action.appointmentId]
      return newState;
    default: 
      return state;
  }
};


export default appointmentsReducer