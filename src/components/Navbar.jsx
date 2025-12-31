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

  const categories = [
    { path: '/products/construction', label: 'Construction' },
    { path: '/products/interior', label: 'Interior Designing' },
    { path: '/products/custom-furniture', label: 'Custom Furniture' },
    { path: '/products/automotive', label: 'Automotive' }
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
              className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => !isMenuOpen && setActiveDropdown('services')}
              onMouseLeave={() => !isMenuOpen && setActiveDropdown(null)}
            >
              <button
                className={`dropdown-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
                onClick={() => handleDropdownToggle('services')}
              >
                Services <ChevronDown size={16} />
              </button>
              <ul className="dropdown-menu">
                {categories.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/galleries" className={isActive('/galleries')}>
                Our Work
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
