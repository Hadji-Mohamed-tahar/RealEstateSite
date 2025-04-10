import React from "react";
import "./About.css";
import Container from "../../components/Container/Container";

const About = () => {
  return (
    <div className="about-page">
      {/* <Container> */}
        <h2 className="page-title">🏡 من نحن</h2>
        
        <section className="about-section">
          <h3>نبذة عن الشركة</h3>
          <p>
            نحن شركة عقارية متخصصة في تقديم أفضل الحلول العقارية، سواء كنت تبحث عن منزل أحلامك أو ترغب في استثمار عقاري مربح.
          </p>
        </section>

        <section className="about-section">
          <h3>رؤيتنا وأهدافنا</h3>
          <p>
            رؤيتنا هي توفير عقارات عالية الجودة بأسعار مناسبة، مع ضمان أفضل تجربة للعملاء من خلال الشفافية والاحترافية.
          </p>
        </section>

        <section className="about-section">
          <h3>لماذا تختارنا؟</h3>
          <ul>
            <li>✅ عقارات متميزة في مواقع استراتيجية</li>
            <li>✅ فريق ذو خبرة عالية في السوق العقاري</li>
            <li>✅ خدمات استشارية مجانية لمساعدتك في اتخاذ القرار الأفضل</li>
          </ul>
        </section>
      {/* </Container> */}
    </div>
  );
};

export default About;
