import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import AllRealEstate from "./pages/AllRealEstate/AllRealEstate";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} /> {/* إضافة المسار الجديد */}
        <Route path="/All-Real-Estate" element={<AllRealEstate />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
