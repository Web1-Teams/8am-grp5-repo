

import React from "react"

const Name = () => {
  return (
    <>
      <label htmlFor="Name">
        <h5>:اسم المريض</h5>
      </label>
      <input
        type="text"
        name="Name"
        placeholder="اسم المريض"
        required
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, "");
        }}
      />
    </>
  )
}

export default Name