import React from "react";
import './Lable.css'

const DateTime = () => {
  const today = new Date();

  const disableFriday = (date) => {
    const day = new Date(date).getDay()
    return day === 5 // 5 هو يوم الجمعة
  }

  return (
    <>
      <label htmlFor="date">
        <h5>:التاريخ</h5>
      </label>
      <input 
        type="date" 
        required 
        min={today.toISOString().split("T")[0]} // الحد الأدنى لتاريخ اليوم
        onChange={(e) => {
          if (disableFriday(e.target.value)) {
            e.target.setCustomValidity("لا يمكنك اختيار يوم الجمعة.")
          } else {
            e.target.setCustomValidity("")
          }
        }}
      />

      <label htmlFor="time">
        <h5>:الموعد</h5>
      </label>
      <input 
        type="time" 
        id="time" 
        required
        min="08:00" 
        max="17:00" 
      />
    </>
  )
}

export default DateTime
