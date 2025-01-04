
import React from "react"
import './Lable.css'

const Phone = () => {
  return (

       
     <div className="Phone">
       <label htmlFor="Phone">
        <h5>:رقم الهاتف</h5>
      </label>
    

      <input
        type="tel"
        placeholder="0597133856"
        required
        pattern="\d*" 
       maxLength="10"
      />
         </div>
   
  )
}

export default Phone
