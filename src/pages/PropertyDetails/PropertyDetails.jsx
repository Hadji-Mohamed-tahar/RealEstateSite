import React from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";
import image1 from "../../assets/image (1).jpg";
import image2 from "../../assets/image (2).jpg";
import image3 from "../../assets/image (3).jpg";
import image4 from "../../assets/image (4).jpg";
import image5 from "../../assets/image (5).jpg";

const propertyData = [
  {
    id: 1,
    title: "شقة فاخرة",
    price: "150,000$",
    location: "الجزائر العاصمة",
    description: "شقة واسعة وفاخرة في قلب الجزائر العاصمة.",
    images: [
      image1,image2
    ],
  },
  {
    id: 2,
    title: "فيلا راقية",
    price: "350,000$",
    location: "وهران",
    description: "فيلا فاخرة مع حديقة واسعة في وهران.",
    images: [
      image2,image3
    ],
  },
  {
    id: 3,
    title: "منزل عائلي",
    price: "100,000$",
    location: "قسنطينة",
    description: "منزل عائلي مناسب لجميع أفراد الأسرة.",
    images: [
      image4,image5
    ],
  },
  {
    id: 4,
    title: "ستوديو حديث",
    price: "75,000$",
    location: "عنابة",
    description: "ستوديو حديث ومريح في قلب مدينة عنابة.",
    images: [
      image5,image3
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) {
    return (
      <div className="not-found">
        <h2>🚫 العقار غير موجود</h2>
        <p>يبدو أنك حاولت الوصول إلى عقار غير متاح حاليًا.</p>
        <a href="/properties" className="back-link">🔙 العودة إلى قائمة العقارات</a>
      </div>
    );
    
  }

  return (
    <div className="property-details">
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p className="price">{property.price}</p>
      <p>{property.description}</p>

      <div className="property-gallery">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={`صورة ${index + 1}`} />
        ))}
      </div>

      <div className="contact-form">
        <h3>📞 تواصل معنا</h3>
        <form>
          <input type="text" placeholder="اسمك الكامل" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <textarea placeholder="رسالتك" rows="5" required />
          <button type="submit">أرسل الآن</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
