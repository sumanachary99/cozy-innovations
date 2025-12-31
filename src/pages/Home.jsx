import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Sofa,
  Car,
  PaintBucket,
  MapPin,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Logo from '../components/Logo'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Professional construction services for residential and commercial projects. Quality workmanship guaranteed.',
      link: '/products/construction',
      highlight: 'Expert Team • Quality Materials • Timely Delivery'
    },
    {
      icon: PaintBucket,
      title: 'Interior Designing',
      description: 'Transform your spaces with our expert interior design solutions. From concept to completion.',
      link: '/products/interior',
      highlight: '3D Visualization • Space Planning • Complete Execution'
    },
    {
      icon: Sofa,
      title: 'Custom Furniture',
      description: 'Recliners, sofas, and custom furniture crafted to perfection. Designed to fit your space.',
      link: '/products/custom-furniture',
      highlight: 'Premium Materials • Custom Sizing • Leather Options'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Premium car seat covers and upholstery services. Protect and enhance your vehicle interior.',
      link: '/products/automotive',
      highlight: 'Perfect Fit • Multiple Colors • Expert Installation'
    }
  ]

  const locations = [
    { name: 'Bangalore', icon: MapPin },
    { name: 'Mysuru', icon: MapPin },
    { name: 'Hassan', icon: MapPin }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [services.length])

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  const currentService = services[currentSlide]
  const CurrentIcon = currentService.icon

  return (
    <div className="home">
      {/* Branding Section - Moved to Top */}
      <section className="branding-section">
        <div className="branding-spotlight" />
        <motion.div
          className="branding-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="branding-logo">
            <Logo size="hero" showText={false} />
          </div>

          <h2 className="branding-title">Cozy Innovations</h2>
          <p className="branding-tagline">Building Your Dreams Since 2012</p>

          <div className="branding-locations">
            {locations.map((loc) => (
              <span key={loc.name} className="branding-location">
                <loc.icon size={16} />
                {loc.name}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hero Services Carousel */}
      <section className="hero-carousel">
        <div className="hero-background">
          <div className="hero-gradient" />
        </div>

        <div className="carousel-container">
          {/* Navigation Arrows */}
          <button className="carousel-nav carousel-prev" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="service-slide"
              >
                <div className="slide-icon">
                  <CurrentIcon size={64} />
                </div>
                <h1 className="slide-title">{currentService.title}</h1>
                <p className="slide-description">{currentService.description}</p>
                <p className="slide-highlight">{currentService.highlight}</p>
                <Link to={currentService.link} className="btn slide-cta">
                  Explore {currentService.title} <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-nav carousel-next" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="carousel-indicators">
          {services.map((service, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${service.title}`}
            >
              <service.icon size={20} />
              <span className="indicator-label">{service.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-glow" />
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Get a free consultation and quote from our experts</p>
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
