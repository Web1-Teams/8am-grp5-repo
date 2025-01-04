import React from 'react';
import ServiceCard from './ServiceCard';
import Service from "./Service"
import './Servises.css';
import './root.css';
const Servises = () => {
    return (
        <section className="section service" id="service">
            <div className="container">
                <p className="section-subtitle text-center">
                    مجالات علاجنا
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
                    {Service.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            page={service.page}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Servises;