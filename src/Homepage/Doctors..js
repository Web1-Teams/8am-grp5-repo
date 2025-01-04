
const DoctorCard = ({ imageSrc, name, role, altText }) => (
  <div className="doctor-card">
    <div
      className="card-banner img-holder"
    >
      <img src={imageSrc} width="460" height="500" loading="lazy" alt={altText} className="img-cover" />
    </div>
    <h3 className="h3">
      <a href="." className="card-title">
        {name}
      </a>
    </h3>
    <p className="card-subtitle">{role}</p>
  </div>
);

const DoctorSection = () => {
  const doctors = [
    { imageSrc: "./img/fares.jpg", name: "فارس فقيه", role: "طبيب", altText: "Howard Holmes" },
    { imageSrc: "./img/ebaa.jpg", name: "ايباء معالي", role: "طبيبة", altText: "Ella Thompson" },
    { imageSrc: "./img/sahed.jpg", name: "شهد فقيه", role: "فنية اشعة", altText: "Vincent Cooper" },
  ];

  return (
    <section className="section doctor" aria-label="doctor">
      <div className="container">
        <p className="section-subtitle text-center">فريقنا الطبي</p>
        <h2 className="h2 section-title text-center">افضل خبراء الاسنان</h2>
        <ul className="doctor">
          {doctors.map((doctor, index) => (
            <li className="scrollbar-item" key={index}>
              <DoctorCard {...doctor} />
            </li>
          ))}
        </ul>
        <button type="submit" className="btn">تعرف على باقي الاطباء</button>
      </div>
    </section>
  );
};

export default DoctorSection;
