import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../pages/LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../config/api.js';

export default function CybeBlogs() {
    const [blogs, setBlogs] = useState([]);

    const { language } = useLanguage();
    const { t, i18n } = useTranslation();
    const lang = language || i18n.language || "es";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(apiUrl(`/api/blogs?lang_code=${lang}`));
                const data = await res.json();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setBlogs([]);
            }
        };
        fetchBlogs();
    }, [language, i18n.language]);

    const handleClick = (title, description, image) => {
        navigate("/blog", {
            state: {
                titulo: title,
                contenido: description,
                imagen: image,
                autor: "Jose",
                fecha: "08/09/2025",
            },
        });
    };

    return (
        <div className="container my-5 text-white">

                <h2 className="fw-bold mb-3 text-primary text-lg-center text-uppercase">
                    {lang === "es" ? "Nuestros Blogs" : "Our Blogs"}
                </h2>

                <div className="row g-4">
                    {blogs.length > 0 ? (
                        blogs.map((blog, idx) => {
                            const image =
                                blog.blog_post?.images?.[0]?.image_path || null;

                            const title =
                                blog.title ||
                                blog.blog_post?.translations?.find(
                                    (t) => t.lang_code === lang
                                )?.title ||
                                "Sin título";

                            const description = blog.content || "";

                            return (
                                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                                    <div
                                        className="card h-100 shadow-lg border-0"
                                        style={{
                                            backgroundColor: "#1e1e1e",
                                            color: "white",
                                            borderRadius: "12px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {image && (
                                            <img
                                                src={image}
                                                className="card-img-top"
                                                alt={title}
                                                style={{
                                                    height: "200px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        )}
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title fw-bold">
                                                {title}
                                            </h5>
                                            <p className="card-text text-white-50 flex-grow-1">
                                                {description.length > 180
                                                    ? description.substring(0, 180) + "..."
                                                    : description}
                                            </p>
                                            <button
                                                className="btn btn-outline-primary mt-3"
                                                onClick={() =>
                                                    handleClick(
                                                        title,
                                                        description,
                                                        image
                                                    )
                                                }
                                            >
                                                {t("blogs.lookArticle")}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center text-muted">
                            {t("blogs.notAvailable")}
                        </p>
                    )}
                </div>
        </div>
);
}
