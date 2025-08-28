import { Link } from 'react-router-dom';
import logo from '/public/images/logo.jpeg';
import { useTranslation } from "react-i18next";
import "../i18n"; // importante para inicializar
import { useLanguage } from  "../pages/LanguageProvider.jsx"
import { socialLinks } from "../config/socialLinks";


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);       // ✅ actualiza el contexto
        i18n.changeLanguage(newLang); // ✅ actualiza i18next
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container">
                <img
                    src={logo}
                    alt="Cybevite logo"
                    width={200}
                    height={80}
                    style={{ objectFit: "contain" }}
                />

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">{t("home")}</Link>
                        <Link className="nav-link" to="/solutions">{t("solutions")}</Link>
                        <Link className="nav-link" to="/about">{t("about")}</Link>
                        <Link className="nav-link" to="/career">{t("growth")}</Link>
                        <Link className="nav-link" to="/blogs">{t("blog")}</Link>
                        <Link className="nav-link" to="/contact">{t("navbar.contact_menu")}</Link>
                    </ul>

                    {/* Selector de idioma */}
                    <select
                        className="form-select form-select-sm ms-3"
                        style={{ width: "120px" }}
                        value={language}
                        onChange={handleLanguageChange}
                    >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>

                    <span className="nav-item ms-3">
                        <span className="fa-stack">
                            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x text-white"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href={socialLinks.x} target="_blank" rel="noreferrer">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x text-white"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x text-white"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin fa-stack-1x text-white"></i>
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </nav>
    );
}
