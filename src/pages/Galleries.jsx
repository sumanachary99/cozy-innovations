import { useState, useMemo } from 'react'
import {
  Building2,
  PaintBucket,
  Sofa,
  Car,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import getCategoryImages from '../utils/imageLoader'
import './Galleries.css'

const Galleries = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleries = [
    {
      id: 1,
      title: 'Construction Projects',
      category: 'construction',
      icon: Building2,
      description: 'Professional construction projects across Karnataka'
    },
    {
      id: 2,
      title: 'Interior Designs',
      category: 'interior',
      icon: PaintBucket,
      description: 'Beautiful interior transformations for homes and offices'
    },
    {
      id: 3,
      title: 'Custom Furniture',
      category: 'custom-furniture',
      icon: Sofa,
      description: 'Custom sofas, recliners, and furniture pieces'
    },
    {
      id: 4,
      title: 'Automotive',
      category: 'automotive',
      icon: Car,
      description: 'Premium car seat covers and upholstery work'
    }
  ]

  // Get images for selected gallery
  const galleryImages = useMemo(() => {
    if (selectedGallery) {
      return getCategoryImages(selectedGallery.category)
    }
    return []
  }, [selectedGallery])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setSelectedImage(null)
  }

  return (
    <div className="galleries-page">
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <AnimatedSection>
            <h1>See Our Work</h1>
            <p>Explore our portfolio of completed projects</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="galleries-section section">
        <div className="container">
          <StaggerContainer className="galleries-grid" staggerDelay={0.1}>
            {galleries.map(gallery => (
              <StaggerItem key={gallery.id}>
                <div
                  className="gallery-card"
                  onClick={() => setSelectedGallery(gallery)}
                >
                  <div className="gallery-image-placeholder">
                    <div className="gallery-icon-wrapper">
                      <gallery.icon size={48} />
                    </div>
                    <div className="gallery-overlay">
                      <span>View Gallery</span>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3>{gallery.title}</h3>
                    <p className="gallery-description">{gallery.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery Modal with Images */}
      {selectedGallery && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeGallery}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <selectedGallery.icon size={32} className="modal-icon" />
              <h2>{selectedGallery.title}</h2>
            </div>
            <p className="modal-description">{selectedGallery.description}</p>

            {galleryImages.length > 0 ? (
              <div className="modal-images-grid">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="modal-image-item"
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
                      <span className="image-category-tag">{image.subcategory}</span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="modal-placeholder">
                <p>No images available</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox for full image view */}
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
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default Galleries
