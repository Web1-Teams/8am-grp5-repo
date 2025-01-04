import React from 'react';
import './FormInput.css';
const FormInput = ({ id, label, type = "text", placeholder = "" }) => (
  <div className="form-input">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required
      className="form-field"
    />
  </div>
);
export default FormInput;
