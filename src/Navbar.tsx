import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const isActive = (path:string) => location.pathname === path

  const navItemClass = (path : string) =>
    `nav-link text-white d-flex flex-column align-items-center px-3 py-2 ${
      isActive(path) ? 'bg-secondary text-light rounded' : ''
    }`

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img className='me-2'
                            src="/dog_icon.png"
                            alt="Logo"
                            style={{ width: '1.8rem', height: '1.8rem' }}
                        />
              <span style={{ fontSize: '1.25rem' }}>Zénó oldala</span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className={navItemClass('/')}>
                  <i className="bi bi-house-door mb-1" style={{ fontSize: '1.2rem' }}></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/timeline" className={navItemClass('/timeline')}>
                  <i className="bi bi-clock-history mb-1" style={{ fontSize: '1.2rem' }}></i>
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={navItemClass('/gallery')}>
                  <i className="bi bi-images mb-1" style={{ fontSize: '1.2rem' }}></i>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
