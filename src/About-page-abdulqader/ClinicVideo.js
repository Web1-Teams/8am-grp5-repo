
import React from "react";
import './clincvideo.css'; 

const ClinicVideo = () => {
  return (
    <section id="clinic-video">
      <h2>نظرة في الداخل عن عيادتنا</h2>
      <div className="video-container">
        <video controls autoPlay muted>
          <source src="clinicved.mp4" type="video/mp4" />
          الفيديو غير مدعوم على متصفحك.
        </video>
      </div>
    </section>
  );
};

export default ClinicVideo



