import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          {/* قسم معلومات الاتصال */}
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <p>📍 العنوان: الجزائر، شارع المثال</p>
            <p>📞 الهاتف: +213 555 123 456</p>
            <p>📧 البريد الإلكتروني: contact@realestate.com</p>
          </div>

          {/* قسم الروابط السريعة */}
          <div className="footer-section">
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="/">الرئيسية</a></li>
              <li><a href="/All-Real-Estate">العقارات</a></li>
              <li><a href="/about">من نحن</a></li>
              <li><a href="/contact">اتصل بنا</a></li>
            </ul>
          </div>

          {/* قسم حقوق النشر */}
          <div className="footer-section">
            <h3>حقوق النشر</h3>
            <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} عقارات الأحلام</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
