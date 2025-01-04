
function Hero() {
  return (
    <section
      className="section hero"
      id="home"
      style={{ backgroundImage: "url('./images/hero-bg.png')" }}
      aria-label="hero"
    >
        
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">مرحبًا بك في فقيه</p>

          <h1 className="h1 hero-title">نقدم أفضل خدمة أسنان</h1>

          <p className="hero-text">
            نوفر لك أفضل خدمات طب الأسنان بأحدث التقنيات لضمان صحة وجمال ابتسامتك.
          </p>

          <form action="" className="hero-form">
            <input
              type="email"
              name="email_address"
              aria-label="email"
              placeholder="أدخل بريدك الإلكتروني..."
              required
              className="email-field"
            />

            <button type="submit" className="btn">
              لأستشارتك
            </button>
          </form>
        </div>

        <figure className="hero-banner">
          <img
            src="/images/hero-banner.png"
            width="587"
            height="839"
            alt="صورة توضيحية"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
