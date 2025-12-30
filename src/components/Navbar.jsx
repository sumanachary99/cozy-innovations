import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const products = [
    { path: '/products/recliner', label: 'Recliner' },
    { path: '/products/sofa', label: 'Customized Sofa' },
    { path: '/products/car-seats', label: 'Car Seats' },
    { path: '/products/home-theater', label: 'Home Theater' }
  ]

  const services = [
    { path: '/products/construction', label: 'Construction' },
    { path: '/products/renovation', label: 'Renovation' },
    { path: '/products/interior', label: 'Interior Designing' },
    { path: '/products/acp', label: 'ACP, Fundermax' },
    { path: '/products/glazing', label: 'Glazing' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo-link">
            <Logo size="small" showText={true} />
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={isActive('/')}>
                Home
              </Link>
            </li>

            <li
              className={`dropdown ${activeDropdown === 'products' ? 'active' : ''}`}
              onMouseEnter={() => !isMenuOpen && setActiveDropdown('products')}
              onMouseLeave={() => !isMenuOpen && setActiveDropdown(null)}
            >
              <button
                className={`dropdown-trigger ${location.pathname.startsWith('/products') && !location.pathname.includes('construction') && !location.pathname.includes('renovation') && !location.pathname.includes('interior') && !location.pathname.includes('acp') && !location.pathname.includes('glazing') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('products')}
              >
                Products <ChevronDown size={16} />
              </button>
              <ul className="dropdown-menu">
                {products.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li
              className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => !isMenuOpen && setActiveDropdown('services')}
              onMouseLeave={() => !isMenuOpen && setActiveDropdown(null)}
            >
              <button
                className={`dropdown-trigger ${location.pathname.includes('construction') || location.pathname.includes('renovation') || location.pathname.includes('interior') || location.pathname.includes('acp') || location.pathname.includes('glazing') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('services')}
              >
                Services <ChevronDown size={16} />
              </button>
              <ul className="dropdown-menu">
                {services.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/galleries" className={isActive('/galleries')}>
                Galleries
              </Link>
            </li>

            <li>
              <Link to="/contact" className={`nav-cta ${isActive('/contact')}`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
