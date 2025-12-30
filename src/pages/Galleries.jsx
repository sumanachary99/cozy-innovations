import { useState } from 'react'
import {
  Building2,
  PaintBucket,
  Sofa,
  Car,
  Hammer,
  Tv,
  Image,
  X
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './Galleries.css'

const Galleries = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)

  const galleries = [
    {
      id: 1,
      title: 'Construction Projects',
      category: 'construction',
      icon: Building2,
      imageCount: 12,
      description: 'Professional construction projects across Karnataka'
    },
    {
      id: 2,
      title: 'Interior Designs',
      category: 'interior',
      icon: PaintBucket,
      imageCount: 15,
      description: 'Beautiful interior transformations for homes and offices'
    },
    {
      id: 3,
      title: 'Furniture Collection',
      category: 'furniture',
      icon: Sofa,
      imageCount: 20,
      description: 'Custom sofas, recliners, and furniture pieces'
    },
    {
      id: 4,
      title: 'Car Seats & Upholstery',
      category: 'automotive',
      icon: Car,
      imageCount: 10,
      description: 'Premium car seat covers and upholstery work'
    },
    {
      id: 5,
      title: 'Renovation Projects',
      category: 'renovation',
      icon: Hammer,
      imageCount: 18,
      description: 'Complete renovation transformations'
    },
    {
      id: 6,
      title: 'Home Theaters',
      category: 'home-theater',
      icon: Tv,
      imageCount: 8,
      description: 'Custom home theater installations'
    }
  ]

  return (
    <div className="galleries-page">
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <AnimatedSection>
            <h1>Our Galleries</h1>
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
                      <Image size={24} />
                      <span>View Gallery</span>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3>{gallery.title}</h3>
                    <p className="gallery-description">{gallery.description}</p>
                    <span className="gallery-count">{gallery.imageCount} images</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4}>
            <div className="galleries-note">
              <p>More images coming soon. Contact us to see our complete portfolio.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Simple Modal Placeholder */}
      {selectedGallery && (
        <div className="gallery-modal" onClick={() => setSelectedGallery(null)}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedGallery(null)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <selectedGallery.icon size={32} className="modal-icon" />
              <h2>{selectedGallery.title}</h2>
            </div>
            <p className="modal-description">{selectedGallery.description}</p>
            <div className="modal-placeholder">
              <Image size={64} />
              <p>Images will be displayed here</p>
              <p className="modal-note">Add your project images to the public/images/galleries folder</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galleries
