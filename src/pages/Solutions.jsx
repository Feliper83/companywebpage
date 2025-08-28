import React, {useState, useEffect} from "react";

import {Image} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useLanguage} from "../pages/LanguageProvider.jsx";
import {useNavigate} from "react-router-dom";


export default function Solutions() {
    const [services, setServices] = useState([]); // Empieza como []
    const [section, setSection] = useState({}); // Empieza como []

    const {language} = useLanguage();
    const {t, i18n} = useTranslation();
    const lang = language || i18n.language || "es";

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {

                const srvRes = await fetch(`/api/services?lang_code=${lang}`);
                const secRes = await fetch(`/api/sections?lang_code=${lang}&slug=services`);

                if (!srvRes.ok) throw new Error("Error al obtener servicios");
                if (!secRes.ok) throw new Error("Error al obtener sections");

                const srvData = await srvRes.json();
                const secData = await secRes.json();
                setServices(srvData);
                setSection(secData[0] || {title: "feres"});
                console.log("srvData:", srvData);
            } catch (e) {
                console.error(e);
                setServices([]);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    const handleClick = (title, description, image) => {
        navigate("/solution", {
            state: {
                titulo: title,
                contenido: description,
                imagen: image
            },
        });
    };

    return (
        <div id="solutions" className="solutions my-5">
            <div className="container">
                <div className="row mb-4 text-center">
                    <div className="col-md-8 offset-md-2">
                        <h5>
                          <span className="badge bg-primary rounded-0 text-uppercase">
                              {section.title}
                          </span>
                        </h5>
                        <h2 className="fw-bold">
                            {section.description}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    {services.map((service) => {
                        return (

                            <div className="col-md-6 mb-4" key={service.id}>
                                <div className="card bg-secondary h-100">
                                    <Image
                                        src={service.service?.icon_path}
                                        alt=""
                                        className="card-img-top"
                                        width={600} // set the width you want
                                        height={300} // set the height you want
                                        style={{objectFit: 'cover'}}
                                    />


                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold">{service.name}</h5>
                                        <p className="card-text flex-grow-1">{service.summary}</p>
                                        <div className="badge bg-primary p-2 text-uppercase align-self-start">
                                            {service.slug}
                                        </div>
                                    </div>
                                    <button className="btn btn-primary"
                                            onClick={() => handleClick(service.name, service.description, service.image)}>
                                        Ver
                                    </button>


                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}
