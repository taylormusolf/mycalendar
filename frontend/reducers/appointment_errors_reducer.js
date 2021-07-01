import { RECEIVE_APPOINTMENT, RECEIVE_APPOINTMENT_ERRORS, RESET_APPOINTMENT_ERRORS } from "../actions/appointment_actions";

const appointmentErrorsReducer = (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_APPOINTMENT:
      return [];
    case RECEIVE_APPOINTMENT_ERRORS:
        return action.errors;
    case RESET_APPOINTMENT_ERRORS:
      return [];
    default: 
      return state;
  }
};


export default appointmentErrorsReducer