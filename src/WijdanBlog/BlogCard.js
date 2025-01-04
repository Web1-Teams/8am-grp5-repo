import React from 'react';
import './root.css'

const BlogCard = ({ imgSrc, imgAlt, dateTime, title, description, link }) => {
    return (
        <li>
            <div className="blog-card">
                <figure className="card-banner img-holder" style={{ '--width': 1180, '--height': 800 }}>
                    <img src={imgSrc} width="1180" height="800" loading="lazy" alt={imgAlt} className="img-cover" />
                    <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime={dateTime}>{new Date(dateTime).toLocaleDateString()}</time>
                    </div>
                </figure>
                <div className="card-content">
                    <h3 className="h3">
                        <a href={link} target="_blank" className="card-title" rel="noopener noreferrer">{title}</a>
                    </h3>
                    <p className="card-text">{description}</p>
                    <a href={link} target="_blank" className="card-link" rel="noopener noreferrer">اقرأ المزيد</a>
                </div>
            </div>
        </li>
    );
};

export default BlogCard;