
const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src="./img/OIP.jpeg"
            width="470"
            height="538"
            loading="lazy"
            alt="صورة تعريفية"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">من نحن</p>
          <h2 className="h2 section-title">نحن نهتم بصحة أسنانك</h2>

          <p className="section-text section-text-1">
            نحن نقدم خدمات عالية الجودة لعلاج الأسنان، مع فريق محترف يعمل على تلبية احتياجاتك. هدفنا هو توفير بيئة مريحة
            وآمنة لضمان صحة أسنانك.
          </p>

          <p className="section-text">
            نستخدم أحدث التقنيات والأساليب العلمية لضمان تقديم أفضل رعاية ممكنة. سواء كنت بحاجة إلى استشارة بسيطة أو
            علاج متقدم، نحن هنا لدعمك في كل خطوة.
          </p>

          <a href="." className="btn">
            اقرأ المزيد
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
