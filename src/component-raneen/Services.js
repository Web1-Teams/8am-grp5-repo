import React from 'react';
import ServiceCard from './ServiceCard';
import services from './servicesData'; 
import './Services.css';
import './root.css';

const Services = () => {
    return (
        <section className="section service" id="service">
            <div className="container">
                <p className="section-subtitle text-center">
                    <span className="highlight-text">
                        مجالات علاجنا
                    </span>
                    <img 
                        src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/512px/1f9b7.png"
                        width="70"
                        height="70"
                        loading="lazy"
                        style={{ verticalAlign: 'middle', marginLeft: '10px' }}
                        alt="tooth"
                    />
                </p>
                <ul className="service-list">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            page={service.page}
                            link={service.link}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;
