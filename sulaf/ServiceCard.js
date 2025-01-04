import React from 'react';
import './ServiceCard.css';
import './root.css';
const ServiceCard = ({ icon, title, description, page }) => {
  return (
    <li>
      <div className="service-card" data-page={page}>
        <div className="card-icon">
          <img src={icon} width="100" height="100" loading="lazy" alt={title} />
        </div>
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;