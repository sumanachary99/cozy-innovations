import { useParams, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import {
  ArrowLeft,
  Check,
  Phone,
  ArrowRight,
  Sofa,
  Car,
  Building2,
  PaintBucket,
  Armchair,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import getCategoryImages from '../utils/imageLoader'
import './ProductCategory.css'

const ProductCategory = () => {
  const { category } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSubcategory, setActiveSubcategory] = useState('all')

  const categoryData = {
    construction: {
      name: 'Construction',
      icon: Building2,
      description: 'Professional construction services for residential and commercial projects. Quality workmanship guaranteed.',
      features: ['Expert Team', 'Quality Materials', 'Timely Completion', 'Project Management', 'Permits Handling', 'Safety Compliance']
    },
    interior: {
      name: 'Interior Designing',
      icon: PaintBucket,
      description: 'Expert interior design solutions to transform your spaces. From concept to completion, we bring your vision to life.',
      features: ['3D Visualization', 'Space Planning', 'Color Consultation', 'Complete Execution', 'Furniture Selection', 'Lighting Design']
    },
    'custom-furniture': {
      name: 'Custom Furniture',
      icon: Sofa,
      description: 'Transform your living space with our custom furniture solutions. Recliners, sofas, and more designed to fit your space perfectly.',
      features: ['Custom Sizing', 'Fabric Selection', 'Leather Options', 'Modular Options', 'Expert Design', 'Premium Upholstery'],
      subcategories: [
        { id: 'leather-furniture', name: 'Leather Furniture', icon: Armchair, description: 'Premium leather recliners, armchairs, and accent pieces' },
        { id: 'modern-sofa', name: 'Modern Sofas', icon: Sofa, description: 'Contemporary sofas and sectionals for modern living' }
      ]
    },
    automotive: {
      name: 'Automotive',
      icon: Car,
      description: 'Premium car seat covers and upholstery services. Protect and enhance your vehicle\'s interior with our quality solutions.',
      features: ['Premium Materials', 'Perfect Fit', 'Easy Installation', 'Multiple Colors', 'Leather Options', 'Custom Designs']
    }
  }

  const data = categoryData[category] || {
    name: 'Product',
    icon: Building2,
    description: 'Explore our quality products and services.',
    features: []
  }

  const Icon = data.icon

  // Get images using useMemo to prevent recalculation on every render
  const allImages = useMemo(() => {
    if (category) {
      return getCategoryImages(category)
    }
    return []
  }, [category])

  // Filter images based on active subcategory
  const images = useMemo(() => {
    if (activeSubcategory === 'all') {
      return allImages
    }
    const subcatName = activeSubcategory === 'leather-furniture' ? 'Leather Furniture' : 'Modern Sofa'
    return allImages.filter(img => img.subcategory === subcatName)
  }, [allImages, activeSubcategory])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <div className="product-category-page">
      <section className="category-header">
        <div className="category-header-glow" />
        <div className="container">
          <AnimatedSection>
            <Link to="/" className="back-link">
              <ArrowLeft size={18} /> Back to Home
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

      {/* Subcategory Cards for Custom Furniture */}
      {data.subcategories && (
        <section className="subcategories-section section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title">Choose a Category</h2>
            </AnimatedSection>
            <div className="subcategories-grid">
              {data.subcategories.map((subcat) => {
                const SubIcon = subcat.icon
                return (
                  <div
                    key={subcat.id}
                    className={`subcategory-card ${activeSubcategory === subcat.id ? 'active' : ''}`}
                    onClick={() => setActiveSubcategory(activeSubcategory === subcat.id ? 'all' : subcat.id)}
                  >
                    <div className="subcategory-icon">
                      <SubIcon size={40} />
                    </div>
                    <h3>{subcat.name}</h3>
                    <p>{subcat.description}</p>
                    <span className="subcategory-count">
                      {allImages.filter(img => img.subcategory === (subcat.id === 'leather-furniture' ? 'Leather Furniture' : 'Modern Sofa')).length} images
                    </span>
                  </div>
                )
              })}
            </div>
            {activeSubcategory !== 'all' && (
              <button className="show-all-btn" onClick={() => setActiveSubcategory('all')}>
                Show All Furniture
              </button>
            )}
          </div>
        </section>
      )}

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
              <h2>Gallery ({images.length} images)</h2>
              {images.length > 0 ? (
                <div className="category-images-grid">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="category-image-item"
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.name}
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', image.src)
                          e.target.parentElement.style.display = 'none'
                        }}
                      />
                      {image.subcategory && (
                        <span className="image-tag">{image.subcategory}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="gallery-placeholder">
                  <div className="gallery-icon">
                    <Icon size={48} />
                  </div>
                  <p>Images coming soon</p>
                </div>
              )}
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

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.name} />
            <p className="lightbox-caption">{selectedImage.name}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCategory
