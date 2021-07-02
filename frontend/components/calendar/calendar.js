import React, {useState, useEffect} from 'react'
import moment from 'moment'

export default function calendar(props) {
  console.log(props)
  const calendar = [];
  const selectedDate = moment(props.value);
  const startDate = selectedDate.clone().startOf('month').startOf('week');
  const endDate = selectedDate.clone().endOf('month').endOf('week');
  let date = startDate.clone().subtract(1, 'day');
  while (date.isBefore(endDate, 'day')){
    calendar.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    });
  };
  console.log(calendar)
  return(
    <div>
      <h1>{moment(props.value)}</h1>
    </div>
    
  )
}