import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Send, User, MessageSquare } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    comments: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:info@cozyinnovations.com?subject=Quote Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProduct: ${formData.product}%0AComments: ${formData.comments}`
    window.location.href = mailtoLink

    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you soon.')
      setIsSubmitting(false)
    }, 500)
  }

  const products = [
    'Recliner',
    'Customized Sofa',
    'Car Seats',
    'Home Theater',
    'Construction',
    'Renovation',
    'Interior Design',
    'ACP/Fundermax',
    'Glazing',
    'Other'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 90712 34091',
      link: 'tel:+919071234091'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@cozyinnovations.com',
      link: 'mailto:info@cozyinnovations.com'
    },
    {
      icon: MapPin,
      title: 'Locations',
      content: 'Bangalore | Mysuru | Hassan',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null
    }
  ]

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <AnimatedSection>
            <h1>Contact Us</h1>
            <p>Get in touch for a free consultation and quote</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-content">
            <AnimatedSection className="contact-info" delay={0.1}>
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Ready to transform your space? Contact us today for expert consultation
                and competitive quotes on all our products and services.
              </p>

              <StaggerContainer className="contact-details" staggerDelay={0.1}>
                {contactInfo.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="contact-detail-item">
                      <div className="contact-icon-wrapper">
                        <item.icon size={24} />
                      </div>
                      <div className="contact-detail-content">
                        <h3>{item.title}</h3>
                        {item.link ? (
                          <a href={item.link}>{item.content}</a>
                        ) : (
                          <p>{item.content}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            <AnimatedSection className="contact-form-wrapper" delay={0.2}>
              <h2>Request a Quote</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} /> Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={16} /> Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={16} /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="product">Product/Service *</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a product or service</option>
                      {products.map(product => (
                        <option key={product} value={product}>{product}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comments">
                    <MessageSquare size={16} /> Additional Details
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows="5"
                    maxLength={500}
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                  <span className="char-count">{formData.comments.length} / 500</span>
                </div>

                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Request'} <Send size={18} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
