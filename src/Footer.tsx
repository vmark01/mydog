import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-white mt-auto">
            <footer className="d-flex justify-content-between align-items-center py-4 border-top px-4">
                <div className="d-flex align-items-center gap-2">
                    {/* Logo + szöveg */}
                    <Link to="/" aria-label="Logo">
                        <img
                            src={`${import.meta.env.BASE_URL}/dog_icon.png`}
                            alt="Logo"
                            className="logo-icon"
                        />
                    </Link>
                    <span>&copy; VM. All rights reserved.</span>
                </div>

                {/* Instagram ikon */}
                <div>
                    <a
                        className="text-white"
                        href="https://www.instagram.com/mark.veer"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="bi bi-instagram social-icon"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}
