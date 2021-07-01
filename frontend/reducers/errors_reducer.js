import { combineReducers } from "redux";
import appointmentErrorsReducer from "./appointment_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  appointment: appointmentErrorsReducer
});

export default errorsReducer;