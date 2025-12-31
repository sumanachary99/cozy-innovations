const Logo = ({ size = 'default', showText = true, className = '' }) => {
  const sizes = {
    small: { icon: 40, text: '1rem', sub: '0.6rem' },
    default: { icon: 50, text: '1.2rem', sub: '0.7rem' },
    large: { icon: 80, text: '1.8rem', sub: '0.9rem' },
    hero: { icon: 120, text: '2.5rem', sub: '1rem' }
  }

  const currentSize = sizes[size] || sizes.default

  return (
    <div className={`logo-component ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div className="logo-icon" style={{ width: currentSize.icon, height: currentSize.icon }}>
        <img
          src={`${import.meta.env.BASE_URL}images/logo/logo2.png`}
          alt="Cozy Innovations Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      {showText && (
        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
          <span
            className="logo-main"
            style={{
              fontSize: currentSize.text,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            Cozy Innovations
          </span>
          <span
            className="logo-sub"
            style={{
              fontSize: currentSize.sub,
              opacity: 0.7,
              letterSpacing: '0.3em',
              textTransform: 'uppercase'
            }}
          >
            Since 2012
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
