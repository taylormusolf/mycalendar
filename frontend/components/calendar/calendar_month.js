import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Week from './calendar_week'

export default function Month(props) {
  const calendar = [];
  const today = moment();
  const selectedDate = moment(props.value);
  const startDate = selectedDate.clone().startOf('month').startOf('week');
  const endDate = selectedDate.clone().endOf('month').endOf('week');
  let date = startDate.clone().subtract(1, 'day');
  while (date.isBefore(endDate, 'day')){
    calendar.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    });
  };
  return(
    <div className='month'>
      <ul className='day-labels'>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul className ='calendar-block'>
        {calendar.map((week, i)=>(
          <li key={i}><Week week={week} onChange={props.onChange} key={i}/></li>
        ))}
      </ul>
      <p>Selected date is <b>{moment().format()}</b></p>
    </div>
    
  )
}