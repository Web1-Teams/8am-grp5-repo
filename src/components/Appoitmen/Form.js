// imports
import React from 'react'
import  './sform.css'
import Reservation from './components/Appoitmen/Reservation' 
import Name from './components/Appoitmen/Name' 
import DateTime from './DateTime'
import Phone  from './components/Appoitmen/Phone'
import Doctor from './Doctor'



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