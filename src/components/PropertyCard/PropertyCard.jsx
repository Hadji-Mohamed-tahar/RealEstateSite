import React from "react";
import "./PropertyCard.css";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom

const PropertyCard = ({ id, title, price, location }) => { 
  console.log("📦 ID المستلم في PropertyCard:", id);
 
  return (
<Link to={`/property-details/${id}`} className="property-card-link">
    <div className="property-card">
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;
