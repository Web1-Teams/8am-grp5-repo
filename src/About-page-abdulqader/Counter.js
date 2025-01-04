// counter.js
export const animateCounters = (element) => {
    const counters = element.querySelectorAll(".counter");
    const duration = 2000; // المدة الزمنية للوصول إلى الهدف (بالملي ثانية)
  
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0; // القيمة الحالية تبدأ من 0
      const increment = target / (duration / 50); // يتم تحديث العداد كل 50ms
  
      const updateCounter = () => {
        count += increment; // أضف القيمة المضافة
        if (count < target) {
          counter.innerText = Math.floor(count); // التحديث التدريجي
          setTimeout(updateCounter, 50); // استدعاء الدالة كل 50ms
        } else {
          counter.innerText = target; // تأكد أن القيمة النهائية هي الهدف
        }
      };
  
      updateCounter();
    });
  };
  