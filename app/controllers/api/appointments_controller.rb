class Api::AppointmentsController < ApplicationController
  #before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @appointments = Appointment.all
    render :index
  end

  def show
    @appointment = Appointment.find_by(id: params[:id])
    render :show
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render :show
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  def update
    #@appointment = current_user.appointments.find_by(id: params[:id])
    @appointment = Appointment.find_by(id: params[:id])
    if @appointment && @appointment.update(appointment_params)
      render :show
    else
      render json: ["Unable to update appointment"], status: 422
    end
  end

  def destroy
    #@appointment = current_user.appointments.find_by(id: params[:id])
    @appointment = Appointment.find_by(id: params[:id])
    if @appointment && @appointment.delete
    else
      render json: ["Unable to delete appointment"], status: 422  
    end
  end


  private

  def appointment_params
    params.require(:appointment).permit(:title, :start_date, :end_date, :creator_id)
  end


end