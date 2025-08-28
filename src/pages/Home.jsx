
import '../js/bootstrap.bundle.min.js';
import '../js/replaceme.min.js';

import '../js/globalscript.js';
import {useTranslation} from "react-i18next";
import "../i18n";
import {useEffect, useState} from "react";
import {useLanguage} from "./LanguageProvider.jsx"; // inicializa las traducciones



export default function Home() {

    const {language} = useLanguage();
    const {t, i18n} = useTranslation();
    const lang = language || i18n.language || "es";

    const [company, setCompany] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comRes = await fetch(`/api/company?lang_code=${lang}`);

                if (!comRes.ok) throw new Error("Error al obtener company");

                const companyData = await comRes.json();
                setCompany(companyData);
            } catch (e) {
                console.error(e);
                setCompany({});
            }
        };

        fetchData();
    }, [lang]);

    // Update document title when company changes
    useEffect(() => {
        if (company && company.name) {
            document.title = company.name;
            console.log("Document title set:", company.name);
        }
    }, [company]);

    useEffect(() => {
        const loadScript = (src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        };

        loadScript("/js/replaceme.min.js");
        loadScript("/js/bootstrap.bundle.min.js");
        loadScript("/js/script.js");

    }, []);

    return (
        <>
            <header className="header position-relative min-vh-100 d-flex align-items-center">
                <img
                    src="/images/vertical-decoration-left.svg"
                    alt="Service image"
                    width={600}
                    height={300}
                    style={{ objectFit: "contain" }}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <h1 className="xl-text mt-5">
                                {t("title")}
                                <span className="text-primary fw-bold replace-me ps-3">
                                  {t("subtitle")}
                                </span>
                            </h1>
                            <p className="lead">
                                {t("description")}
                            </p>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

