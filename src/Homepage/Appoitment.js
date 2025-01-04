import React from 'react';

const CtaSection = () => {
  return (
    <section className="section cta" aria-label="cta">
      <div className="container">
        <figure className="cta-banner">
          <img
            src="./images/cta-banner.png"
            width="1056"
            height="1076"
            loading="lazy"
            alt="cta banner"
            className="w-100"
          />
        </figure>

        <div className="cta-content">
          <p className="section-subtitle">احجز موعدك الأن</p>
          <h2 className="h2 section-title">يمكنك حجز موعدك الكترونيا </h2>
          <a href="Doctors" className="btn"> احجز موعدك </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
