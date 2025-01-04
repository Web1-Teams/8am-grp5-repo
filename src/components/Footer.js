
const Schedule = ({ days, hours }) => (
  <div className="schedule">
    <div className="schedule-icon">
      <ion-icon name="time-outline"></ion-icon>
    </div>
    <span className="span">
      {days}
      <br />
      {hours}
    </span>
  </div>
);

const FooterList = ({ title, items }) => (
    <ul className="footer-list">
      <li>
        <p className="footer-list-title">{title}</p>
      </li>
      {items.map((item, index) => (
        <li key={index} className="footer-item">
          <div className="item-icon">
          <ion-icon name={item.icon}></ion-icon>
          </div>
          <a href={item.link} className="footer-link" target="_blank" rel="noopener noreferrer">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
  

const Footer = () => {
  const scheduleData = [
    { days: 'الاحد-الثلاثاء', hours: '9:00am - 10:00Pm' },
    { days: 'الاربعاء-خميس', hours: '10:00am - 8:00Pm' },
    { days: 'السبت', hours: '11:00am - 7:00Pm' },
  ];

  const quickLinks = [
    { text: 'الرئيسية', link: '#', icon: 'add-outline' },
    { text: 'من نحن', link: '#', icon: 'add-outline' },
    { text: 'الخدمات', link: '#', icon: 'add-outline' },
    { text: 'الفريق الطبي', link: '#', icon: 'add-outline' },
    { text: 'المدونة', link: '#', icon: 'add-outline' },
  ];

  const socialLinks = [
    { text: 'فيس بوك', link: 'https://www.facebook.com/Dr.Faris.Faqeeh', icon: 'logo-facebook' },
    { text: 'انستغرام', link: 'https://www.instagram.com/dr.f.faqeeh', icon: 'logo-instagram' },
    { text: 'واتس اب', link: 'https://wa.me/595550544', icon: 'logo-whatsapp' },
  ];

  const locationInfo = [
    { text: 'نابلس-عورتا -الشارع الرئيسي', link: '#', icon: 'location-outline' },
  ];

  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <li>
              <p className="footer-list-title">اوقات الدوام</p>
            </li>
            {scheduleData.map((schedule, index) => (
              <Schedule key={index} days={schedule.days} hours={schedule.hours} />
            ))}
          </div>

          <FooterList title="وصول سريع" items={quickLinks} />
          <FooterList title="تواصل معنا" items={socialLinks} />
          <FooterList title="موقعنا" items={locationInfo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
