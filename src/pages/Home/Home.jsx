import React from "react";
import "./Home.css";
import heroImage from "../../assets/image.jpg";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { Link } from "react-router-dom";
const featuredProperties = [
  { id: 1, title: "فيلا فاخرة", price: "500,000 $", location: "الجزائر العاصمة" },
  { id: 2, title: "شقة راقية", price: "250,000 $", location: "وهران" },
  { id: 3, title: "منزل عائلي", price: "150,000 $", location: "قسنطينة" },
];

const Home = () => {
  return (
    <div className="home">
      {/* قسم البانر */}
      <section className="hero">
        <img src={heroImage} alt="عقارات رائعة" className="hero-image" />
        <div className="hero-text">
          <h1>اكتشف أفضل العقارات بأسعار تنافسية</h1>
          <p>نحن نقدم لك أفضل الخيارات لشراء أو استئجار عقار الأحلام.</p>
          <Link to="/All-Real-Estate" className="btn">استعرض العقارات</Link>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section className="services">
        <h2>خدماتنا</h2>
        <div className="service-list">
          <ServiceCard title="شراء عقار" description="نوفر لك أفضل العروض لشراء العقارات بأسعار مميزة." />
          <ServiceCard title="بيع عقار" description="نساعدك في بيع عقارك بسرعة وبأفضل سعر ممكن." />
          <ServiceCard title="الإيجار" description="تصفح قائمة العقارات المتاحة للإيجار الطويل أو القصير المدى." />
        </div>
      </section>

      <section className="featured-properties ">
  <h2>عقارات مميزة</h2>
  <div className="property-list container">
    {featuredProperties.map((property) => (
      <PropertyCard
        key={property.id}
        id={property.id}
        title={property.title}
        price={property.price}
        location={property.location}
      />
    ))}
  </div>
</section>

    </div>
  );
};

export default Home;
