import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Check,
  Phone,
  ArrowRight,
  Armchair,
  Sofa,
  Car,
  Tv,
  Building2,
  Hammer,
  PaintBucket,
  Layers,
  GlassWater
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './ProductCategory.css'

const ProductCategory = () => {
  const { category } = useParams()

  const categoryData = {
    recliner: {
      name: 'Recliner',
      icon: Armchair,
      description: 'Experience ultimate comfort with our premium recliner collection. Each piece is crafted with attention to detail and designed for relaxation.',
      features: ['Ergonomic Design', 'Premium Materials', 'Multiple Styles', 'Custom Options', 'Motorized Options', 'Warranty Included']
    },
    sofa: {
      name: 'Customized Sofa',
      icon: Sofa,
      description: 'Transform your living space with our custom sofa solutions. Designed to fit your space perfectly and match your style.',
      features: ['Custom Sizing', 'Fabric Selection', 'Modular Options', 'Expert Design', 'Color Matching', 'Premium Upholstery']
    },
    'car-seats': {
      name: 'Car Seats',
      icon: Car,
      description: 'Premium car seat covers and upholstery services. Protect and enhance your vehicle\'s interior with our quality solutions.',
      features: ['Premium Materials', 'Perfect Fit', 'Easy Installation', 'Multiple Colors', 'Leather Options', 'Custom Designs']
    },
    'home-theater': {
      name: 'Home Theater',
      icon: Tv,
      description: 'Create the ultimate entertainment experience with our home theater design and installation services.',
      features: ['Acoustic Design', 'Premium Equipment', 'Custom Installation', 'Sound Optimization', '4K/8K Support', 'Smart Integration']
    },
    construction: {
      name: 'Construction',
      icon: Building2,
      description: 'Professional construction services for residential and commercial projects. Quality workmanship guaranteed.',
      features: ['Expert Team', 'Quality Materials', 'Timely Completion', 'Project Management', 'Permits Handling', 'Safety Compliance']
    },
    renovation: {
      name: 'Renovation',
      icon: Hammer,
      description: 'Complete renovation solutions for homes and offices. Transform your space with our expert renovation services.',
      features: ['Design Consultation', 'Quality Workmanship', 'Material Selection', 'Project Coordination', 'Budget Planning', 'Timeline Management']
    },
    interior: {
      name: 'Interior Designing',
      icon: PaintBucket,
      description: 'Expert interior design solutions to transform your spaces. From concept to completion, we bring your vision to life.',
      features: ['3D Visualization', 'Space Planning', 'Color Consultation', 'Complete Execution', 'Furniture Selection', 'Lighting Design']
    },
    acp: {
      name: 'ACP, Fundermax',
      icon: Layers,
      description: 'Professional ACP and Fundermax installation services. Durable and aesthetic solutions for modern buildings.',
      features: ['Quality Materials', 'Expert Installation', 'Weather Resistant', 'Multiple Finishes', 'Fire Resistant', 'Low Maintenance']
    },
    glazing: {
      name: 'Glazing',
      icon: GlassWater,
      description: 'Professional glazing services for windows, doors, and facades. Energy-efficient and aesthetic solutions.',
      features: ['Energy Efficient', 'Safety Glass', 'Custom Sizing', 'Professional Installation', 'UV Protection', 'Noise Reduction']
    }
  }

  const data = categoryData[category] || {
    name: 'Product',
    icon: Building2,
    description: 'Explore our quality products and services.',
    features: []
  }

  const Icon = data.icon

  return (
    <div className="product-category-page">
      <section className="category-header">
        <div className="category-header-glow" />
        <div className="container">
          <AnimatedSection>
            <Link to="/products" className="back-link">
              <ArrowLeft size={18} /> Back to Products
            </Link>
            <div className="category-header-content">
              <div className="category-icon-large">
                <Icon size={48} />
              </div>
              <h1>{data.name}</h1>
              <p className="category-description">{data.description}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="category-content section">
        <div className="container">
          <div className="category-details">
            <AnimatedSection className="category-info" delay={0.1}>
              <h2>Features</h2>
              <StaggerContainer className="features-list" staggerDelay={0.08}>
                {data.features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <li>
                      <Check size={20} className="feature-check" />
                      {feature}
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            <AnimatedSection className="category-gallery" delay={0.2}>
              <h2>Gallery</h2>
              <div className="gallery-placeholder">
                <div className="gallery-icon">
                  <Icon size={48} />
                </div>
                <p>Images will be displayed here</p>
                <p className="gallery-note">Add your product images to showcase your work</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="category-cta">
              <h2>Interested in {data.name}?</h2>
              <p>Contact us for a free consultation and quote</p>
              <div className="category-cta-buttons">
                <Link to="/contact" className="btn">
                  Get Quote <ArrowRight size={18} />
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

export default ProductCategory
