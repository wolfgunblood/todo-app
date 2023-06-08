import React from 'react';
import "./Upper.scss";
import Light from "../../assets/images/icon-sun.svg"

const Upper = () => {
  return (
    <div className='upper-container'>
      <div className='upper-header'>
        <h3>TODO</h3>
        <img src={Light} alt="Light Mode" className='icon-light'/>
      </div>
      <input type="text" className='todo-input' placeholder='What needs to be done?' />
    </div>
  )
}

export default Upper