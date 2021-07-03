import React, {useState, useEffect} from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { updateAppointment, createAppointment, deleteAppointment, fetchAppointment} from '../../actions/appointment_actions';

function Update(props){
  const [titleState, setTitle] = useState(props.appointment.title);
  const [startDateState, setStartDate] = useState(props.appointment.start_date);
  const [endDateState, setEndDate] = useState(props.appointment.end_date);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData=({
      title: titleState,
      start_date: startDateState,
      end_date: endDateState,
      creator_id: 1
    })
    props.updateAppointment(formData).then((action) => props.closeModal());
  }
  const handleDelete = () =>{
    props.deleteAppointment(props.appointment.id).then((action) => props.closeModal());
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className='appointment'>
          <h1>Update Appointment</h1>
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
          <button onClick={()=>handleDelete()}>Delete</button>
        </div>
      </div>
    </div>
  )

}






const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    creatorId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    action: (appointment) => dispatch(createAppointment(appointment)),
    updateAppointment: (appointment, id) => dispatch(updateAppointment(appointment, id)),
    fetchAppointment: appointmentId => dispatch(fetchAppointment(appointmentId)),
    deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);