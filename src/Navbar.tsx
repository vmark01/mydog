import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) =>
    `nav-link text-white d-flex flex-column align-items-center px-3 py-2 ${isActive(path) ? 'bg-secondary text-light rounded' : ''
    }`;

  return (
    <header>
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img
                className="logo-img me-2"
                src={`${import.meta.env.BASE_URL}/dog_icon.png`}
                alt="Logo"
              />
              <span className="logo-text">Zénó kalandjai</span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className={navItemClass('/')}>
                  <i className="bi bi-house-door mb-1 nav-icon"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/timeline" className={navItemClass('/timeline')}>
                  <i className="bi bi-clock-history mb-1 nav-icon"></i>
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={navItemClass('/gallery')}>
                  <i className="bi bi-images mb-1 nav-icon"></i>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className={navItemClass('/contact')}>
                  <i className="bi bi-envelope mb-1 nav-icon"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
