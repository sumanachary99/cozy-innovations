import { Link } from 'react-router-dom'
import {
  Armchair,
  Sofa,
  Car,
  Tv,
  Building2,
  Hammer,
  PaintBucket,
  Layers,
  GlassWater,
  ArrowRight
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './Products.css'

const Products = () => {
  const categories = [
    {
      id: 'recliner',
      name: 'Recliner',
      description: 'Comfortable and stylish recliners for your home',
      icon: Armchair
    },
    {
      id: 'sofa',
      name: 'Customized Sofa',
      description: 'Custom sofas designed to fit your space and style',
      icon: Sofa
    },
    {
      id: 'car-seats',
      name: 'Car Seats',
      description: 'Premium car seat covers and upholstery',
      icon: Car
    },
    {
      id: 'home-theater',
      name: 'Home Theater',
      description: 'Complete home theater solutions',
      icon: Tv
    },
    {
      id: 'construction',
      name: 'Construction',
      description: 'Professional construction services',
      icon: Building2
    },
    {
      id: 'renovation',
      name: 'Renovation',
      description: 'Home and office renovation services',
      icon: Hammer
    },
    {
      id: 'interior',
      name: 'Interior Designing',
      description: 'Expert interior design solutions',
      icon: PaintBucket
    },
    {
      id: 'acp',
      name: 'ACP, Fundermax',
      description: 'ACP and Fundermax installation services',
      icon: Layers
    },
    {
      id: 'glazing',
      name: 'Glazing',
      description: 'Professional glazing services',
      icon: GlassWater
    }
  ]

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="page-header-glow" />
        <div className="container">
          <AnimatedSection>
            <h1>Our Products & Services</h1>
            <p>Explore our wide range of premium products and services</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="products-section section">
        <div className="container">
          <StaggerContainer className="products-grid" staggerDelay={0.08}>
            {categories.map(category => (
              <StaggerItem key={category.id}>
                <Link
                  to={`/products/${category.id}`}
                  className="product-card"
                >
                  <div className="product-icon-wrapper">
                    <category.icon size={36} />
                  </div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="product-link">
                    View Details <ArrowRight size={16} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}

export default Products
