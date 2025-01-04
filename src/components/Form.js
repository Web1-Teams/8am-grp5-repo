// imports
import React from 'react'
import  './sform.css'
import Reservation from './Reservation' 
import Name from './Name' 
import DateTime from './DateTime'
import Phone  from './Phone'
import Doctor from './Doctor'
import './Reservation.css'
import './Lable.css'



//function
const Form=()=>{
    return(
      <div className="structure">
         <Reservation />
      <form className="Form">
        <Name />
        <DateTime />
        <Phone />
        <Doctor />
        <button type="submit">
          <i className="fas fa-check"> حجز الموعد </i>
        </button>
      </form>
    </div>

)
}
 
export default Form