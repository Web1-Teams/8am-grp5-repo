
const ServiceCard = ({ iconSrc, title, description }) => (
  <div className="service-card">
    <div className="card-icon">
      <img
        src={iconSrc}
        width="100"
        height="100"
        loading="lazy"
        alt="أيقونة خدمة"
        className="w-100"
      />
    </div>
    <div>
      <h3 className="h3 card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      iconSrc: "./images/service-icon-6.png",
      title: "علاج العصب",
      description: "نقدم علاجًا متخصصًا للحفاظ على أسنانك الطبيعية وصحتها.",
    },
    {
      iconSrc: "./images/service-icon-3.png",
      title: "تقويم الأسنان",
      description: "حلول فعالة لتحسين محاذاة الأسنان للحصول على ابتسامة مثالية.",
    },
    {
      iconSrc: "./images/service-icon-5.png",
      title: "طب الأسنان التجميلي",
      description: "خدمات متقدمة لتحسين مظهر ابتسامتك.",
    },
    {
      iconSrc: "./images/service-icon-2.png",
      title: "نظافة الفم",
      description: "خدمات متكاملة للحفاظ على صحة الفم والأسنان.",
    },
    {
      iconSrc: "./images/service-icon-4.png",
      title: "الاستشارات المباشرة",
      description: "فريقنا متاح للإجابة عن جميع أسئلتك الصحية.",
    },
    {
      iconSrc: "./images/service-icon-1.png",
      title: "فحص التسوس",
      description: "اكتشاف مبكر لأي مشكلات في أسنانك باستخدام أحدث التقنيات.",
    },
  ];

  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">خدماتنا</p>
        <h2 className="h2 section-title text-center">ما الذي نقدمه</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <ServiceCard
                iconSrc={service.iconSrc}
                title={service.title}
                description={service.description}
              />
            </li>
          ))}
          <li className="service-banner">
            <figure>
              <img
                src="./images/service-banner.png"
                width="409"
                height="467"
                loading="lazy"
                alt="صورة الخدمة"
                className="w-100"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
