

import React from "react"
import './Lable.css'

const Doctor = () => {
  return (
    <div className="doctor">
      <label htmlFor="doctor">
        <h5>:اسم الطبيب</h5>
      </label>
      <select id="doctor" name="doctor" required>
        <option value="" disabled selected>
          :اختر الطبيب
        </option>
        <option value="">د.فارس فقيه</option>
        <option value="">د.لينا عثمان</option>
        <option value="">د.مؤمن بني فيصل</option>
        <option value="">د.إباء معالي</option>
        <option value="">د.سعيد عثمان</option>
      </select>
    </div>
  )
}

export default Doctor
