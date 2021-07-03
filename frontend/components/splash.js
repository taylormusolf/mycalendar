import React, {useState, useEffect} from 'react';
import Calendar from './calendar/calendar_month';
import moment from 'moment';

import { connect } from 'react-redux';
import { updateAppointment, createAppointment, deleteAppointment, fetchAppointment} from '../actions/appointment_actions';

function Splash(props) {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e)
  };
  const [titleState, setTitle] = useState("");
  const [startDateState, setStartDate] = useState("");
  const [endDateState, setEndDate] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData=({
      title: titleState,
      start_date: startDateState,
      end_date: endDateState,
      creator_id: 1
    })
    props.action(formData);
  }

  // const [appointmentClickedState, setAppointmentClickedState] = useState(false);
  // const changeAppointmentClickedState = (boolean) =>{
  //   setAppointmentClickedState(boolean)
  // };
  const [appointmentsState, setAppointmentsState] = useState("");
  // const changeAppointments = (date) =>{
  //   setAppointmentsState({[date]:{}})
  // }
  //useEffect(()=>[displayAppointment])
  // const displayAppointment = () =>{
  //   const appointment = appointmentsState[moment(dateState).format('MMMM Do YYYY')];
  //   if(!appointment){
  //     return(
  //      <div>
  //        No existing appointments
  //      </div>
  //     )
  //   } else {
  //     return(
  //       <div>
  //         {appointment.title}
  //         <button>Edit</button>
  //         <button onClick={()=>deleteAppointment(appointment.startDate)}>Delete</button>
  //       </div> 
  //     )
  //   }
    
  // }
  // const displayCreateAppointment = ()=>{
  //   if(!appointmentClickedState){
  //     return(
  //       <button onClick={()=>changeAppointmentClickedState(true)}>Create an appointment</button>
  //     )
  //   } else {
  //     return(
  //       <div>
  //         <h3>Create Appointment</h3>
  //         <form></form>
  //         {<button onClick={()=>changeAppointmentClickedState(false)}>Hide appointment create</button>}
  //       </div>
  //     )
  //   }
  // }
  const deleteAppointment = (date) =>{
    console.log(appointmentsState)
    const startDate = date.slice(0);
    delete appointmentsState[startDate];
    console.log(appointmentsState)
  }
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
        </div>
        <div className='appointment'>
          <h1>Create an appointment</h1>
          <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type='text' value={titleState} onChange={e => setTitle(e.target.value)}/>
          </label>
          <label>
            Start Date:
            <input type='datetime-local' value={startDateState} onChange={e => setStartDate(e.target.value)}/>
          </label>
          <label>
            End Date:
            <input type='datetime-local' value={endDateState} onChange={e => setEndDate(e.target.value)}/>
          </label>
          <input type="submit" value='submit'/>
          </form>
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
});


export default connect(mSTP, mDTP)(Splash);