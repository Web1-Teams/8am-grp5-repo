import React, { useRef, useEffect } from "react";
import { animateCounters } from "./Counter"; // استيراد الملف الخارجي

const Achievements = () => {
  const achievementsRef = useRef(null); // مرجع للإشارة إلى القسم

  useEffect(() => {
    const section = achievementsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters(section); // تشغيل العدادات عند ظهور القسم
          observer.disconnect(); // إيقاف المراقبة بعد التفعيل
        }
      },
      { threshold: 0.5 } // يبدأ عندما يكون 50% من القسم مرئيًا
    );

    if (section) {
      observer.observe(section); // ربط القسم بالمراقب
    }

    return () => {
      if (section) observer.disconnect(); // تنظيف عند إلغاء المكون
    };
  }, []);

  return (
    <section id="achievements" ref={achievementsRef}>
      <h2>إنجازاتنا</h2>
      <div className="achievements-grid">
        <div className="achievement">
          <div className="circle">
            <h3 className="counter" data-target="6">0</h3>
          </div>
          <p>سنوات من الخبرة</p>
        </div>
        <div className="achievement">
          <div className="circle">
            <h3 className="counter" data-target="1250">0</h3>
          </div>
          <p>المرضى السعداء</p>
        </div>
        <div className="achievement">
          <div className="circle">
            <h3 className="counter" data-target="80">0</h3>
          </div>
          <p>العمليات الجراحية الناجحة</p>
        </div>
        <div className="achievement">
          <div className="circle">
            <h3 className="counter" data-target="5">0</h3>
          </div>
          <p>الجوائز التي حصلنا عليها</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements
