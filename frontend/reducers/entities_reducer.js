import {combineReducers} from "redux";
import usersReducer from './users_reducer';
import appointmentsReducer from './appointments_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  appointments: appointmentsReducer
});


export default entitiesReducer;