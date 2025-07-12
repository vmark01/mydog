import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-white mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 border-top">
                <div className="col-md-4 d-flex align-items-center ps-4">
                    <Link
                        to="/"
                        className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
                        aria-label="Logo"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}/dog_icon.png`}
                            alt="Logo"
                            style={{ width: '1.5rem', height: '1.5rem' }}
                        />
                    </Link>
                    <span className="mb-3 mb-md-0 text-white">&copy; VM. All rights reserved.</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pe-4">
                    <li className="ms-3">
                        <a
                            className="text-white"
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
