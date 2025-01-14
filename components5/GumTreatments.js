import React from 'react';
import './GumTreatments.css'; 

const GumTreatments = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>علاجات اللثة</h2>
                
                <h3>أعراض أمراض اللثة</h3>
                <p>تشمل الأعراض المنتشرة لنزيف اللثة، سطح أحمر ومنتفخ ولامع، رائحة الفم الكريهة، حكة في اللثة، إحساس بالنزيف، وحساسية الأسنان.</p>
                
                <h3>التهاب اللثة</h3>
                <p>هو مرض التهابي يتميز بتدمير الأسنان والأنسجة الداعمة مثل الرباط اللثوي، الملاط، والعظم السنخي.</p>
                
                <h3>تشخيص وعلاج أمراض اللثة</h3>
                <p>يستخدم أطباء الأسنان جهاز يسمى "مسبار دواعم الأسنان" لقياس طول جيب اللثة.</p>

                <h3>طرق علاج اللثة</h3>
                <ul className="tips-list">
                    <li>تدريب على نظافة الفم</li>
                    <li>تنظيف الجير</li>
                    <li>تقويم سطح الجذور</li>
                    <li>التجديد</li>
                    <li>العمليات الترميمية</li>
                    <li>عمليات الغشاء المخاطي</li>
                </ul>

                <h3>فوائد علاج اللثة</h3>
                <p>الغرض الرئيسي من علاج اللثة هو الحفاظ على أسنان غير صحية تبدو ميؤوس منها في الفم.</p>

                <h3>تشخيص الفم</h3>
                <p>يشمل التشخيص الناجح فحص الفم والأسنان والأنسجة المحيطة بها مع الفحص الإشعاعي لتحديد العلاجات المناسبة.</p>

                <h3>التصوير بالأشعة أثناء الحمل</h3>
                <p>كمية الإشعاع المنبعثة من أجهزة التصوير الإشعاعي المستخدمة في طب الأسنان منخفضة جداً ولا تشكل خطرًا على صحة الإنسان.</p>
            </div>
        </section>
    );
};

export default GumTreatments;
