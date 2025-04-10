import React from "react";
import "./AllRealEstate.css";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import Container from "../../components/Container/Container";

// بيانات العقارات
const propertiesData = [
  {
    id: 1,
    title: "شقة فاخرة",
    price: "150,000$",
    location: "الجزائر العاصمة",
  },
  {
    id: 2,
    title: "فيلا راقية",
    price: "350,000$",
    location: "وهران",
  },
  {
    id: 3,
    title: "منزل عائلي",
    price: "100,000$",
    location: "قسنطينة",
  },
  {
    id: 4,
    title: "ستوديو حديث",
    price: "75,000$",
    location: "عنابة",
  },
];

const AllRealEstate = () => {
  return (
    <div className="all-real-estate">
      <Container>
        <h2 className="page-title">📍 جميع العقارات المتاحة</h2>
        {propertiesData.length === 0 ? (
          <div className="no-properties">🚫 لا توجد عقارات متاحة حاليًا.</div>
        ) : (
          <div className="properties-grid">
            {propertiesData.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                price={property.price}
                location={property.location}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllRealEstate;
