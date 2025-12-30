import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Sofa,
  Hammer,
  Car,
  Tv,
  PaintBucket,
  MapPin,
  ArrowRight,
  Phone
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Logo from '../components/Logo'
import './Home.css'

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Professional construction services for your dream projects',
      link: '/products/construction'
    },
    {
      icon: PaintBucket,
      title: 'Interior Designing',
      description: 'Transform your spaces with our expert interior design solutions',
      link: '/products/interior'
    },
    {
      icon: Sofa,
      title: 'Customized Furniture',
      description: 'Recliners, sofas, and custom furniture tailored to your needs',
      link: '/products/recliner'
    },
    {
      icon: Car,
      title: 'Car Seats',
      description: 'Premium car seat covers and upholstery services',
      link: '/products/car-seats'
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Complete renovation solutions for homes and offices',
      link: '/products/renovation'
    },
    {
      icon: Tv,
      title: 'Home Theater',
      description: 'Design and installation of premium home theater systems',
      link: '/products/home-theater'
    }
  ]

  const locations = [
    { name: 'Bangalore', icon: MapPin },
    { name: 'Mysuru', icon: MapPin },
    { name: 'Hassan', icon: MapPin }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-spotlight" />
        <div className="hero-lamp">
          <div className="lamp-shade" />
          <div className="lamp-cord" />
          <div className="lamp-light" />
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-logo">
            <Logo size="hero" showText={false} />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Cozy Innovations
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building Your Dreams
          </motion.p>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Since 2012
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Architectural Bespoke Turnkey | Construction | Interior | Furniture | Cars
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/products" className="btn">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get Quote
            </Link>
          </motion.div>

          <motion.div
            className="hero-locations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {locations.map((loc, index) => (
              <span key={loc.name} className="hero-location">
                {loc.name}
                {index < locations.length - 1 && <span className="location-divider">|</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-overview section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Services</h2>
          </AnimatedSection>

          <StaggerContainer className="services-grid" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="service-card">
                  <div className="service-icon-wrapper">
                    <service.icon size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Services Available At</h2>
          </AnimatedSection>

          <StaggerContainer className="locations-grid" staggerDelay={0.15}>
            {locations.map((location) => (
              <StaggerItem key={location.name}>
                <div className="location-card">
                  <location.icon size={32} className="location-icon" />
                  <h3>{location.name}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-glow" />
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2>Ready to Build Your Dream?</h2>
              <p>Contact us today for a free consultation and quote</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn">
                  Get In Touch <ArrowRight size={18} />
                </Link>
                <a href="tel:+919071234091" className="btn btn-secondary">
                  <Phone size={18} /> +91 90712 34091
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Home
