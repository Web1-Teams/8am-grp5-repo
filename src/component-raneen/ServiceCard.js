import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, page, link }) => {
  return (
    <li>
      <div className="service-card" data-page={page}>
        <div className="card-icon">
          <img src={icon} width="100" height="100" loading="lazy" alt={title} />
        </div>
        <div>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <Link to={link} className="card-link">
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;

  