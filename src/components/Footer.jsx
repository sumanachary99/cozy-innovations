import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Mail, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/galleries', label: 'Our Work' },
    { to: '/contact', label: 'Contact Us' }
  ]

  const services = [
    { to: '/products/construction', label: 'Construction' },
    { to: '/products/interior', label: 'Interior Designing' },
    { to: '/products/custom-furniture', label: 'Custom Furniture' },
    { to: '/products/automotive', label: 'Automotive' }
  ]

  const locations = ['Bangalore', 'Mysuru', 'Hassan']

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <Logo size="default" showText={true} />
            <p className="footer-description">
              Transforming spaces with premium furniture, expert construction, and innovative interior solutions since 2012.
            </p>
            <div className="footer-cta">
              <Link to="/contact" className="btn btn-outline">
                Get a Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.to}>
                  <Link to={service.to}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <Phone size={18} />
              <a href="tel:+919071234091" className="contact-link">
                +91 90712 34091
              </a>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <a href="mailto:info@cozyinnovations.com" className="contact-link">
                info@cozyinnovations.com
              </a>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
            <div className="contact-item locations-item">
              <MapPin size={18} />
              <div className="locations-list">
                {locations.map((location, index) => (
                  <span key={location} className="location-tag">
                    {location}
                    {index < locations.length - 1 && <span className="separator">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {currentYear} Cozy Innovations. All rights reserved.</p>
          <p className="footer-tagline">Building Your Dreams</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
