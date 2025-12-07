import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import { apiUrl } from '../config/api.js';

export default function About() {
    const [about, setAbout] = useState([]);
    const { i18n } = useTranslation();
    const { language } = useLanguage();
    const lang = language || i18n.language || "es";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aboutRes = await fetch(apiUrl(`/api/sections?lang_code=${lang}&slug=about-us`));
                if (!aboutRes.ok) throw new Error("Error al obtener about");

                const aboutData = await aboutRes.json();
                setAbout(aboutData);
            } catch (e) {
                console.error(e);
                setAbout([]);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    return (
        <section className="about-section">
            {about.map((srv) => (
                <div key={srv.section_id} className="mb-5">
                    {/* Imagen destacada */}
                    {srv.section?.images?.[0]?.image_path && (
                        <div className="position-relative">
                            <Image
                                src={srv.section.images[0].image_path}
                                alt={srv.title || "Imagen"}
                                className="img-fluid w-100"
                                style={{
                                    objectFit: "cover",
                                    height: "400px",
                                    filter: "brightness(60%)", // oscurece para resaltar texto
                                }}
                            />
                            {/* Texto encima de la imagen */}
                            <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
                                <h1 className="fw-bold display-5">{srv.title}</h1>
                            </div>
                        </div>
                    )}

                    {/* Contenido */}
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <p
                                    className="fs-5 lh-lg text-muted"
                                    style={{textAlign: "justify"}}
                                >       {srv.description}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
