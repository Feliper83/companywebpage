import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "./LanguageProvider.jsx";
import {useNavigate} from "react-router-dom";
import { apiUrl } from '../config/api.js';
import LazyImage from '../components/LazyImage.jsx';

export default function CareerGrowth() {
    const [benefits, setBenefits] = useState([]);
    const [jobs, setJobs] = useState([]);

    const { t, i18n } = useTranslation(); // obtener idioma actual
    const { language } = useLanguage();
    const lang = language || i18n.language || "es";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {

                const benefitsRes = await fetch(apiUrl(`/api/benefits?lang_code=${lang}`));
                const jobsRes = await fetch(apiUrl(`/api/jobs?lang_code=${lang}`));

                console.log("benefitsRes: " + benefitsRes)
                console.log("jobsRes: " + jobsRes)

                if (!benefitsRes.ok) throw new Error("Error al obtener benefits");
                if (!jobsRes.ok) throw new Error("Error al obtener jobs");

                const benData = await benefitsRes.json();
                const jobData = await jobsRes.json();

                setBenefits(benData);
                setJobs(jobData);
            } catch (error) {
                console.error("Error en CareerGrowth:", error);
            }
        };

        fetchData();
    }, [language, i18n.language]);

    const handleApply = (job) => {
        console.log("Aplicando al trabajo:", job);
        // Redirige a la ruta con el id del trabajo
        navigate(`/apply/${job.id}`);
    };
    return (
        <div className="career-growth container my-5">
            {/* Introducción */}
            <section className="text-center mb-5">

                    <h2 className="fw-bold mb-3 text-primary text-uppercase">{t("career.title")}</h2>
                    <p className="lead text-muted">
                        {t("career.description")}
                    </p>
            </section>

            {/* Ofertas laborales */}
            <section className="mb-5">
                <h4 className="fw-bold mb-3 text-primary text-md-center text-uppercase">{t("jobs.title")}</h4>

                    <div className="row g-4">
                        {Array.isArray(jobs) && jobs.map((job, index) => (
                            <div key={index} className="col-md-4">
                                <div
                                    className="card h-100 shadow-lg border-0"
                                    style={{
                                        backgroundColor: "#1e1e1e",
                                        color: "white",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <LazyImage
                                        src={job.job.image}
                                        className="card-img-top"
                                        alt={job.title}
                                        style={{objectFit: "cover", height: "200px"}}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h4 className="fw-bold">{job.title}</h4>
                                        <p className="mb-1">{job.location}</p>
                                        <p className="text-muted">{job.experience}</p>
                                        <ul className="card-text flex-grow-1 text-muted">
                                            {job.job.skills?.map((skill, idx) => (
                                                <li key={idx}>{skill}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="btn btn-outline-primary mt-auto"
                                            type="button"
                                            onClick={() => handleApply(job)}
                                        >
                                            {t("jobs.applyPosition")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>


            {/* Beneficios */}
            <section>
                <div className="container my-5">
                    <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                                <LazyImage
                                    src="/images/team-member-4.jpg"
                                    className="img-fluid h-100 w-100"
                                    alt="Miembro del Dream Team"
                                    style={{objectFit: "cover", height: "100%"}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body p-4">
                                    <h3 className="fw-bold mb-3 text-primary">{t("career.sloganTitle")}</h3>
                                    <p className="fs-5 text-muted">
                                        {t("career.sloganDescription")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <h3 className="fw-bold mb-3 text-primary">{t("benefit.title")}</h3>
                    <p className="mb-4">{t("benefit.description")}</p>
                    <div className="d-flex flex-wrap gap-2">
                        {Array.isArray(benefits) && benefits.map((benefit, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className="btn btn-outline-primary rounded-pill px-3 py-2 shadow-sm"
                            >
                                <i className="bi bi-gift-fill me-2 text-primary"></i>
                                {benefit.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}