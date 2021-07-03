import React, {useState, useEffect} from 'react';
import Calendar from './calendar/calendar_month';
import moment from 'moment';
import { openModal } from '../actions/modal_actions';

import { connect } from 'react-redux';
import { updateAppointment, createAppointment, deleteAppointment, fetchAppointment} from '../actions/appointment_actions';

function Splash(props) {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e)
  };
  
  return (
    <div className='app'>
      <div className='app-container'>
        <header>
          <h1>MyCalendar <i className="far fa-calendar-alt"></i></h1>
          <button onClick={()=>changeDate(moment(dateState).subtract(1, 'months'))}><i className="fas fa-chevron-left" ></i></button>
          <h2>{moment(dateState).format('MMM YYYY')}</h2>
          <button onClick={()=>changeDate(moment(dateState).add(1, 'months'))}><i className="fas fa-chevron-right"></i></button>
          <h2><button onClick={()=>changeDate(moment())}>Today</button></h2>
        </header>
        
        <div className='calendar'>
          <Calendar 
          value={dateState}
          onChange={changeDate}
          />
        </div>
        <div className='footer'>
          <p>Selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
          <button className='submit-button' onClick={()=>props.openModal('create')}>Create an appointment</button>
        </div>
      </div>
      
    </div>
  )
}

const mSTP = (state, ownProps) => {
  return {
    appointment: state.entities.appointments[ownProps.match.params.appointmentId],
    creatorId: state.session.id,
  };
};

const mDTP = dispatch => ({
  action: (appointment) => dispatch(createAppointment(appointment)),
  updateAppointment: (appointment, id) => dispatch(updateAppointment(appointment, id)),
  fetchAppointment: appointmentId => dispatch(fetchAppointment(appointmentId)),
  deleteAppointment: () => dispatch(deleteAppointment(appointmentId)),
  openModal: (modal) => dispatch(openModal(modal)),
});


export default connect(mSTP, mDTP)(Splash);