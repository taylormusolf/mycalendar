import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function Splash() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e)
  };

  const [appointmentClickedState, setAppointmentClickedState] = useState(false);
  const changeAppointmentClickedState = (boolean) =>{
    setAppointmentClickedState(boolean)
  };
  const [appointmentsState, setAppointmentsState] = useState({'June 25th 2021': {title:'Doctor Appointment', startDate: 'June 25th 2021'}, });
  // const changeAppointments = (date) =>{
  //   setAppointmentsState({[date]:{}})
  // }
  useEffect(()=>[displayAppointment])
  const displayAppointment = () =>{
    const appointment = appointmentsState[moment(dateState).format('MMMM Do YYYY')];
    if(!appointment){
      return(
       <div>
         No existing appointments
       </div>
      )
    } else {
      return(
        <div>
          {appointment.title}
          <button>Edit</button>
          <button onClick={()=>deleteAppointment(appointment.startDate)}>Delete</button>
        </div> 
      )
    }
    
  }
  const displayCreateAppointment = ()=>{
    if(!appointmentClickedState){
      return(
        <button onClick={()=>changeAppointmentClickedState(true)}>Create an appointment</button>
      )
    } else {
      return(
        <div>
          <h3>Create Appointment</h3>
          <form></form>
          {<button onClick={()=>changeAppointmentClickedState(false)}>Hide appointment create</button>}
        </div>
      )
    }
  }
  const deleteAppointment = (date) =>{
    console.log(appointmentsState)
    const startDate = date.slice(0);
    delete appointmentsState[startDate];
    console.log(appointmentsState)
  }
  return (
    <div className='app'>
      <div>
        <h1>My Calendar </h1>
        <Calendar 
        value={dateState}
        onChange={changeDate}
        />
        <p>Selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
        {displayAppointment()}
        {displayCreateAppointment()}
      </div>
      
    </div>
  )
}