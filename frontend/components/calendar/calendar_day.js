import React, {useState, useEffect} from 'react';
import moment from 'moment';

export default function Day(props) {
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

  return(
    <div className='day' onClick={()=>handleSelect(event)}>
      {date()}
    </div>
  )

}