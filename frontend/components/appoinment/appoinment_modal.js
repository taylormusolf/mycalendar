import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { updateAppointment, createAppointment, deleteAppointment, fetchAppointment} from '../../actions/appointment_actions';
import Create from './appointment_create'
import Update from './appointment_update'

function Modal({modal, closeModal, appointment}){
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create':
      component = <Create />;
      break;
    case 'update':
      component = <Update appointment={appointment}/>;
      break;
    default:
      return null;
  }
  if(modal === 'create'){
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  } else if (modal === 'update'){
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }  
}


const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    appointment: state.entities.appointments,
    creatorId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    action: (appointment) => dispatch(createAppointment(appointment)),
    updateAppointment: (appointment, id) => dispatch(updateAppointment(appointment, id)),
    fetchAppointment: appointmentId => dispatch(fetchAppointment(appointmentId)),
    deleteAppointment: () => dispatch(deleteAppointment(appointmentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);