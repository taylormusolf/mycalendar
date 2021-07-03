import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { updateAppointment, createAppointment, deleteAppointment, fetchAppointment, fetchAppointments} from '../../actions/appointment_actions';
import { connect } from 'react-redux';

function Day(props) {
  const [appointmentsState, setAppointments] = useState({})
  useEffect(()=>
    props.fetchAppointments().then(setAppointments),
    []
  );
  const date = () =>{
    const num = moment(props.day._d).format('L').slice(3,5);
    // if(num[0] === '0'){
    //   return num[1];
    // } else{
      return num;
    // }
  }
  const handleSelect = (event) =>{
    props.onChange(props.day._d);
    let oldSelected = document.getElementsByClassName("selected");
    if(oldSelected.length === 1){
      oldSelected[0].classList.remove("selected");
    }
    let newSelected = event.target
    newSelected.classList.add("selected")
  }
  const appointments = () =>{
    if(!Object.keys(appointmentsState).length) return null;
    const appointments = Object.values(appointmentsState.appointments);
    let matchingAppts = [];
    appointments.forEach((appointment)=>{
      if(moment(appointment.start_date).format("MMM Do YY") == moment(props.day._d).format("MMM Do YY")){
        matchingAppts.push(appointment)
      }
    })
    return matchingAppts;
    
    // if(!matchingAppts) return null;
    // matchingAppts.map((appt, i)=>(
    //   <div key={i}>{appt.title}</div>
    // ))
  }

  return(
    <div className='day' onClick={()=>handleSelect(event)}>
      <div className='day-date'>{date()}</div>
      <div className='day-appointment'>
        {appointments() ? appointments().map((appt, i)=>(
          <div key={i}>{moment(appt.start_date).format('LT')} {appt.title}</div>
        )) : null
        }
      </div>
    </div>
  )

}

const mSTP = (state) => {
  return {
    appointments: state.entities.appointment,
    creatorId: state.session.id,
  };
};

const mDTP = dispatch => ({
  action: (appointment) => dispatch(createAppointment(appointment)),
  updateAppointment: (appointment, id) => dispatch(updateAppointment(appointment, id)),
  fetchAppointment: appointmentId => dispatch(fetchAppointment(appointmentId)),
  fetchAppointments: ()=> dispatch(fetchAppointments()),
  deleteAppointment: () => dispatch(deleteAppointment(appointmentId)),
});


export default connect(mSTP, mDTP)(Day);