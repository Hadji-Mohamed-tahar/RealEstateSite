import React, { useState } from "react";
import "./Contact.css";
import Container from "../../components/Container/Container";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Container>
        <h2 className="page-title">📞 اتصل بنا</h2>
        
        {/* معلومات الاتصال */}
        <div className="contact-info">
          <p>📍 العنوان: الجزائر، شارع مثال</p>
          <p>📞 الهاتف: +213 555 123 456</p>
          <p>📧 البريد الإلكتروني: contact@realestate.com</p>
        </div>

        {/* نموذج الاتصال */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">إرسال</button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
