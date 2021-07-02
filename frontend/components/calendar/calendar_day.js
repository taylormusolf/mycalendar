import React, {useState, useEffect} from 'react';
import moment from 'moment';

export default function Day(props) {
  const date = () =>{
    const num = moment(props.day._d).format('L').slice(3,5);
    if(num[0] === '0'){
      return num[1];
    } else{
      return num;
    }
  }
  return(
    <div className='day' onClick={()=>props.onChange(props.day._d)}>
      {date()}
    </div>
  )

}