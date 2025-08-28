import { useTranslation } from "react-i18next";
import "../i18n";
import {Link} from "react-router-dom";

export default function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className="footer py-6 bg-dark text-white">
            <div className="container">
                <div className="row">

                    {/* About */}
                    <div className="col-md-4 my-3">
                        <h6 className="mb-3">
                            <i className="fas fa-address-card me-2"></i>{t("footer.about_title")}
                        </h6>
                        <p>{t("footer.about_text")}</p>
                        <p><strong>{t("footer.about_slogan")}</strong></p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 my-3">
                        <h6 className="mb-3">
                            <i className="fas fa-link me-2"></i>{t("footer.links_title")}
                        </h6>
                        <ul className="list-unstyled">
                            <li><Link to="/">{t("footer.link_home")}</Link></li>
                            <li><Link to="/solution">{t("footer.link_solutions")}</Link></li>
                            <li><Link to="/about">{t("footer.link_abouts")}</Link></li>
                            <li><Link to="/careergrowth">{t("footer.link_careers")}</Link></li>
                            <li><Link to="/blogs">{t("footer.link_blogs")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="col-md-4 my-3">
                        <h6 className="mb-3">
                            <i className="fas fa-envelope me-2"></i>{t("footer.contact_title")}
                        </h6>
                        <p>
                            <a href="mailto:contact@cybevite.com" className="text-white">
                                contact@cybevite.com
                            </a>
                        </p>
                        <div className="d-flex mb-3">
                            <a href="#"><i className="fab fa-facebook fa-2x me-3"></i></a>
                            <a href="#"><i className="fab fa-twitter fa-2x me-3"></i></a>
                            <a href="#"><i className="fab fa-instagram fa-2x me-3"></i></a>
                            <a href="#"><i className="fab fa-linkedin fa-2x"></i></a>
                        </div>
                        <Link className="btn btn-primary btn-sm" to="/contact">{t("footer.contact_cta")}</Link>
                        {/* Language Switch */}
                        <div className="mt-3">
                            <button
                                className="btn btn-outline-light btn-sm me-2"
                                onClick={() => i18n.changeLanguage("en")}
                            >
                                English
                            </button>
                            <button
                                className="btn btn-outline-light btn-sm"
                                onClick={() => i18n.changeLanguage("es")}
                            >
                                Español
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="text-center mt-4 small">
                    © {new Date().getFullYear()} Cybevite Software Solutions. {t("footer.copyright")}
                </div>
            </div>
        </footer>
    );
}
