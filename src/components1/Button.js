import React from 'react';
import './Button.css';


const Button = ({ children }) => (
  <button 
    type="submit"
    className="button"
  >
    {children}
  </button>
);

export default Button;
