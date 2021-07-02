import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Day from './calendar_day'

export default function Week(props) {
  return(
    <div>
      <ul className='week'>
        {props.week.days.map((day, i)=>{
          if(moment(day).format("MMM Do YY") !== moment().format("MMM Do YY")){
            return <li key={i}><Day day={day} key={i} onChange={props.onChange}></Day></li>
          } else{
            return <li className='today' key={i}><Day  day={day} key={i} onChange={props.onChange}></Day></li>
          }
        })}
      </ul>
    </div>
    
  )

}