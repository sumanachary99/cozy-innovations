import { Link } from 'react-router-dom'
import {
  Sofa,
  Car,
  Building2,
  PaintBucket,
  ArrowRight
} from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import './Products.css'

const Products = () => {
  const categories = [
    {
      id: 'construction',
      name: 'Construction',
      description: 'Professional construction services',
      icon: Building2
    },
    {
      id: 'interior',
      name: 'Interior Designing',
      description: 'Expert interior design solutions',
      icon: PaintBucket
    },
    {
      id: 'custom-furniture',
      name: 'Custom Furniture',
      description: 'Recliners, sofas, and custom furniture tailored to your needs',
      icon: Sofa
    },
    {
      id: 'automotive',
      name: 'Automotive',
      description: 'Premium car seat covers and upholstery',
      icon: Car
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
