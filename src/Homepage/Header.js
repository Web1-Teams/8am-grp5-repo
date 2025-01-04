import { Link } from 'react-router-dom';
const Header = () =>{
  return(
      <header className="header">
<div className="header-top">
  <div className="container">
    <ul className="contact-list">
      <li className="contact-item">
        <ion-icon name="mail-outline"></ion-icon>
        <a href="mailto:info@example.com" className="contact-link">Faqeh@gmail.com</a>
      </li>
      <li className="contact-item">
        <ion-icon name="call-outline"></ion-icon>
        <a href="tel:+917052101786" className="contact-link">0595550544</a>
      </li>
    </ul>
    <ul className="social-list">
      <li>
        <a href="https://www.facebook.com/Dr.Faris.Faqeeh" className="social-link">
        <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/dr.f.faqeeh" className="social-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
      <li>
        <a href="#tel:+917052101786" className="social-link">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </li>
    </ul>
  </div>
</div>

<div className="header-bottom" data-header>
  <div className="container">
    <a href="#home" className="logo"> Faqeh</a>
    <nav className="navbar container" data-navbar>
      <ul className="navbar-list">
        <li><a href="#home" className="navbar-link" data-nav-link>الرئيسية</a></li>
        <li><a href="#service" className="navbar-link" data-nav-link>الخدمات</a></li>
        <li><a href="home" className="navbar-link" data-nav-link> الفريق الطبي</a></li>

        <li><a href="#about" className="navbar-link" data-nav-link>من نحن</a></li>
        <li><a href="#blog" className="navbar-link" data-nav-link>المدونة</a></li>
        <li><a href="home" className="navbar-link" data-nav-link>اتصل بنا</a></li>
      </ul>
    </nav>
    <Link to="/appoitment" className="btn">احجز موعدك</Link>
      <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
        <ion-icon name="menu-sharp" aria-hidden="true" className="menu-icon"></ion-icon>
        <ion-icon name="close-sharp" aria-hidden="true" className="close-icon"></ion-icon>
      </button>
  </div>
</div>
</header>

  )
}
export default Header;
