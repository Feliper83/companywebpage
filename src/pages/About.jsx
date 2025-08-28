import {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useLanguage} from "./LanguageProvider.jsx";


export default function About() {

    const [about, setAbout] = useState([]);
    const { i18n } = useTranslation(); // obtener idioma actual
    const { language } = useLanguage();
    const lang = language || i18n.language || "es";


    useEffect(() => {
        const fetchData = async () => {
            try {
                const aboutRes = await fetch(`/api/sections?lang_code=${lang}&slug=about-us`);
                if (!aboutRes.ok) throw new Error("Error al obtener about");

                const aboutData = await aboutRes.json();
                setAbout(aboutData);
                console.log("aboutData:", aboutData);
            } catch (e) {
                console.error(e);
                setAbout([]);
            }
        };

        fetchData();
    }, [language, i18n.language]);


    return (
        <section className="w-100">
            {about.map((srv) => (
                <div key={srv.section_id}>
                    {srv.section?.images?.[0]?.image_path && (
                        <Image
                            src={srv.section.images[0].image_path}
                            alt={srv.title || "Imagen"}
                            className="img-fluid"
                            style={{
                                objectFit: "cover",
                                width: "100vw",
                                height: "400px", // ajusta la altura deseada
                                display: "block"
                            }}
                            fluid
                        />
                    )}
                    <div className="container py-4">
                        <h3>{srv.title}</h3>
                        <p>{srv.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
